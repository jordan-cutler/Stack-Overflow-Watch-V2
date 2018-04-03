import React, { Component } from 'react';
import Question from './Question/Question';
import { connect } from 'react-redux';

 import './QuestionList.css';

class QuestionList extends Component {
  render() {
    console.log('entered render');
    const questionList = this.props.questions.map(question => {
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
      <ul className="questions">
        {questionList}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions.questions
  };
};

export default connect(mapStateToProps)(QuestionList);
