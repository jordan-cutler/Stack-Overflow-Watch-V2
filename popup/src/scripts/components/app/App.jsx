import React, { Component } from 'react';
import { connect } from 'react-redux';
 import './App.css';
import QuestionList from '../Questions/QuestionList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <QuestionList/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

export default connect(mapStateToProps)(App);
