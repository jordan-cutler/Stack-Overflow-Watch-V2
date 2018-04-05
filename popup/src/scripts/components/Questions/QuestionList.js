import React from 'react';
import Question from './Question/Question';
import { connect } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import { Col, ListGroup, Row } from 'react-bootstrap';
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
        <Row className="title-row">
          <Col xs={6}>
            <span className="title-name">Stack Overflow&nbsp;&nbsp;</span>
            <i className="material-icons" id="title-icon">remove_red_eye</i>
          </Col>
          <Col xsOffset={8}>
            <Pagination/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="questionsCol">
            <ListGroup>
              {questionList}
            </ListGroup>
          </Col>
        </Row>
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
