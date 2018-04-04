import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import QuestionList from '../Questions/QuestionList';
import { Grid } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className="App">
        <QuestionList/>
      </Grid>
    );
  }

  componentDidMount() {
    const displayApp = () => {
      setTimeout(() => {
        const style = document.querySelector('#app').style;
        style.display = 'block';
        setTimeout(() => {
          style.opacity = 1;
        });
      }, 100);
    };
    displayApp();

  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(App);
