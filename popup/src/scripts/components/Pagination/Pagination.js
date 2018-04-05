import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../../event/src/actions/actions';
import PageLeft from '../../../assets/page_left.svg';
import PageRight from '../../../assets/page_right.svg';
import './Pagination.css';
import { Row, Col } from 'react-bootstrap';

class Pagination extends Component {

  render() {
    // const spacing = {
    //   marginRight: '10px'
    // };
    return (
      <Row>
        <Col xs={5} xsPush={2} id="currentPageInfoCol">
          <span className="light-gray">
          {this.props.questionsPerPage * this.props.pageNumber - (this.props.questionsPerPage - 1)}-
            {this.props.questionsPerPage * this.props.pageNumber} of {this.props.questions.length}
          </span>
        </Col>
        <Col xs={6} xsOffset={1}>
          <ButtonGroup>
            <Button
              className="nav-button"
              disabled={this.props.pageNumber === 1}
              onClick={this.props.onDecrementPageNumber}
            >
              <img src={PageLeft} className="nav-button-image" alt="Left"/>
            </Button>
            <Button
              className="nav-button"
              disabled={this.props.questions.length <= (this.props.pageNumber * this.props.questionsPerPage)}
              onClick={this.props.onIncrementPageNumber}
            >
              <img src={PageRight} className="nav-button-image" alt="Right"/>
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementPageNumber: () => dispatch({
      type: actionTypes.INCREMENT_PAGE_NUMBER
    }),
    onDecrementPageNumber: () => dispatch({
      type: actionTypes.DECREMENT_PAGE_NUMBER
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
