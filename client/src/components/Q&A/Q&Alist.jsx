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
      <div className="questionlist">I am a robot</div>
      // <ol>
      //   this.state.questions.map((question) => {
      //     return <li id="questionItem" value={question.data}>I am a question</li>
      //   })
      // </ol>
    )
  }
}

export default QuestionList;
// add q modal file
  // post method here
// add a modal file
  // post method here

