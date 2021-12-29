import React from 'react';
import App from '../App.jsx';
import axios from 'axios';
import Question from './Question.jsx';

const QuestionList = (props) => {
  console.log(props);
    return (
      <div className="container"><p class="text-start">
        Questions and Answers
      </p>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
      </div>
      <div className="row">
          {props.data.QuestionListdata.QuestionListForId5.results.map((question) => {
            return <Question data={question} />;
          })}
      </div>
      </div>
    )
}

export default QuestionList;
// add q modal file
  // post method here
// add a modal file
  // post method here

