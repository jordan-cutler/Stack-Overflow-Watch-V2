import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../../event/src/actions/actions';
import PageLeft from '../../../assets/page_left.svg';
import PageRight from '../../../assets/page_right.svg';
import './Pagination.css';

class Pagination extends Component {

  render() {
    const spacing = {
      marginRight: '10px'
    };
    return (
      <div>
        <span className="light-gray" style={spacing}>
          {this.props.questionsPerPage * this.props.pageNumber - (this.props.questionsPerPage - 1)}-
          {this.props.questionsPerPage * this.props.pageNumber} of {this.props.questions.length}
        </span>
        <ButtonGroup>
          <Button
            disabled={this.props.pageNumber === 1}
            onClick={this.props.onDecrementPageNumber}
          >
            <img src={PageLeft} className="nav-button-image" alt="Left"/>
          </Button>
          <Button
            disabled={this.props.questions.length <= (this.props.pageNumber * this.props.questionsPerPage)}
            onClick={this.props.onIncrementPageNumber}
          >
            <img src={PageRight} className="nav-button-image" alt="Right"/>
          </Button>
        </ButtonGroup>
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
