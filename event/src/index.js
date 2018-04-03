import {createStore} from 'redux';
import rootReducer from './reducers';

import {wrapStore} from 'react-chrome-redux';
import * as actionTypes from './actions/actions';

import axios from 'axios';
console.log('in background');
const store = createStore(rootReducer, {});

wrapStore(store, {
  portName: 'example'
});

const API_KEY = "PgIHgWjR5mBZD429EUo6Rw((";
const SITE = "stackoverflow.com";

const API_URL = 'https://api.stackexchange.com/2.2/questions/unanswered/';
const QUESTION_LISTENER_INTERVAL = 5000;
const PAGE_SIZE = 10;


console.log('hello');
setInterval(() => {
  console.log("hai")
}, 1000);
const beginQuestionListener = () => {
  retrieveQuestionData();
  setInterval(() => {
    retrieveQuestionData();
  }, QUESTION_LISTENER_INTERVAL)
};

const retrieveQuestionData = () => {
  console.log(store.getState());
  store.getState().questions.tagGroups.forEach(tagGroup => {
    axios
      .get(API_URL + createQueryByTags(tagGroup.wantedTags))
      .then(response => {
        updateQuestionsListFromApiResponse(response.data.items, tagGroup);
      });
  });
};

const updateQuestionsListFromApiResponse = (questionsResponse, tagGroupUsed) => {
  const newQuestions = getNewQuestionsWithoutUnwantedTags(questionsResponse, tagGroupUsed);
  const updatedList = [...newQuestions, ...store.getState().questions.questions];
  const listSortedByMostRecentQuestions = sortQuestionsMostRecentCreation(updatedList);
  store.dispatch({
    type: actionTypes.UPDATE_QUESTIONS,
    questions: listSortedByMostRecentQuestions
  });
};

const getNewQuestionsWithoutUnwantedTags = (questionsResponse, tagGroupUsed) => {
  const tagIsNotUnwanted = (tag) => !tagGroupUsed.unwantedTags.includes(tag);

  return questionsResponse.filter(question => {
    const isNewQuestion = !store.getState().questions.questions.map(q => q.question_id).includes(question.question_id);
    const questionIsNotArchived = !store.getState().questions.archivedQuestionIds.includes(question.question_id);
    const questionHasNoUnwantedTags = question.tags.every(tagIsNotUnwanted);
    return isNewQuestion && questionIsNotArchived && questionHasNoUnwantedTags;
  });
};

const createQueryByTags = (tags) => {
  return `?site=${SITE}&order=desc&sort=creation&tagged=${tags.join(';')}&pagesize=${PAGE_SIZE}&key=${API_KEY}`;
};

const sortQuestionsMostRecentCreation = (questions) => {
  const questionsCopy = [...questions];
  return questionsCopy.sort((a, b) => {
    return b.creation_date - a.creation_date;
  });
};

beginQuestionListener();
