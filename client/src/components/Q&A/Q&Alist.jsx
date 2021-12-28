import React from 'react';
import App from '../App.jsx';
import axios from 'axios';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 0,
      questions: [],
      currentProductAnswers: []
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container bg-dark text-white gap-3">Questions and Answers dark background white text
        <div className="row">
          <div className="col-3 border border-5 rounded-pill text-center">Hi</div>
          <div className="col-4 border border-4 rounded-circle text-end">Hello</div>
          <div className="col-3 border border-3 text-start">Sup</div>
          <div className="col-2 text-center">I'm boring</div>
        </div>
      </div>
    )
  }
}

export default QuestionList;
// add q modal file
  // post method here
// add a modal file
  // post method here

