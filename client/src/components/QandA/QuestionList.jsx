/* eslint-disable react/prop-types */
import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';
import AddQuestion from './AddQuestion.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';

const QuestionList = (props) => {
  return (
    <div className="container" maxHeight="vh-100">
      <p className="text-start fs-5 fw-light">
      Questions and Answers
      </p>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Filter Questions</button>
        {/* Above button label will be replaced by a magnifying glass icon in later update FIX ME ^^ */}
      </div>
      <div className="row">
        {props.data.results.map((question, index) => {
          if (index < 2) { // instead of hardcoding a 2 here, create a variable that increments by two each time button is clicked. Once variable is greater than or equal to the number of questions, hide the button.
            return <QuestionListEntry key={index} data={question} currentProductName={props.currentProductName} answers={props.answerParser(question.answers)}/>;
          }
        })}
      </div>
      <div className="d-inline-flex">
        <div className="inline-flex">
          <MoreAnsweredQuestions data={props.data.results.slice(2)} currentProductName={props.currentProductName} answerParser={props.answerParser} answers={props.data.results.slice(2).map((question) => {
            return props.answerParser(question.answers);
          })}/>
        </div>
        <div className="inline-flex">
          <AddQuestion currentProductName={props.currentProductName} />
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
