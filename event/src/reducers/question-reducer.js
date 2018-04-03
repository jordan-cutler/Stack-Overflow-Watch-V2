import * as actionTypes from '../actions/actions';

const initialState = {
  questions: [],
  tagGroups: [
    {
      wantedTags: ['scala'],
      unwantedTags: ['apache-spark']
    },
    {
      wantedTags: ['scala', 'java'],
      unwantedTags: ['apache-spark']
    }
  ],
  archivedQuestionIds: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_QUESTIONS:
      const newState = Object.assign({}, state, {
        questions: action.questions
      });
      return newState;
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
