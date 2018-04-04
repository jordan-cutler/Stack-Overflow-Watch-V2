import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
import * as actionTypes from '../../../../../event/src/actions/actions';

class Pagination extends Component {
  render() {
    return (
      <ButtonGroup>
        <Button
          disabled={this.props.pageNumber === 1}
          onClick={this.props.onDecrementPageNumber}
        >
          &lt;
        </Button>
        <Button
          disabled={this.props.questions.length <= (this.props.pageNumber * this.props.questionsPerPage)}
          onClick={this.props.onIncrementPageNumber}
        >
          &gt;
        </Button>
      </ButtonGroup>
    )
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
    }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
