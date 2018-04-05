import * as actionTypes from '../actions/actions';

const initialState = {
  questions: [],
  tagGroups: [
    {
      wantedTags: ['scala'],
      unwantedTags: ['apache-spark']
    },
    {
      wantedTags: ['php'],
      unwantedTags: []
    }
    // {
    //   wantedTags: ['scala', 'java'],
    //   unwantedTags: ['apache-spark']
    // }
  ],
  archivedQuestionIds: [],
  activePageNumber: 1,
  questionsPerPage: 7
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.questions
      });
    case actionTypes.INCREMENT_PAGE_NUMBER:
      return Object.assign({}, state, {
        activePageNumber: state.activePageNumber + 1
      });
    case actionTypes.DECREMENT_PAGE_NUMBER:
      return Object.assign({}, state, {
        activePageNumber: state.activePageNumber - 1
      });
    // case actionTypes.ADD_TAG_GROUP:
    //   return {
    //     ...oldState,
    //     tagGroups: action.tagGroups
    //   };
    // case actionTypes.ADD_ARCHIVED_QUESTION_ID:
    //   return {
    //     ...oldState,
    //     archivedQuestionIds: state.archivedQuestionIds.concat(action.archivedQuestionId)
    //   };
    // case actionTypes.ADD_ARCHIVED_QUESTION_IDS:
    //   return {
    //     ...oldState,
    //     archivedQuestionIds: state.archivedQuestionIds.concat(action.archivedQuestionIds)
    //   };
    default:
      return state;
  }
};
