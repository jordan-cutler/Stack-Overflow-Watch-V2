import React from 'react';
import Question from './Question/Question';
import { connect } from 'react-redux';
import Pagination from '../Pagination/Pagination';

import './QuestionList.css';

class QuestionList extends React.Component {
  render() {
    console.log('entered render');
    const start = (this.props.pageNumber - 1) * this.props.questionsPerPage;
    const questions = [...this.props.questions].slice(start, (start + this.props.questionsPerPage));
    console.log('start=', start);
    console.log('question list', questions);
    const questionList = questions.map(question => {
      return (
        <Question
          key={question.question_id}
          questionName={question.title}
          url={question.link}
          creationTime={question.creation_date * 1000}
          owner={question.owner.display_name}
          ownerReputation={question.owner.reputation}
        />
      );
    });

    return (
      <div>
        <ul className="questions">
          {questionList}
        </ul>
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions.questions,
    pageNumber: state.questions.activePageNumber,
    questionsPerPage: state.questions.questionsPerPage
  };
};

export default connect(mapStateToProps)(QuestionList);
