/* eslint-disable react/prop-types */
import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';
import AddQuestion from './AddQuestion.jsx';

const QuestionList = (props) => {
  console.log(props);
  return (
    <div className="container">
      <p className="text-start fs-5 fw-light">
      Questions and Answers
      </p>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
      </div>
      <div className="row">
        {props.data.results.map((question, index) => {
          if (index < 2) {
            return <QuestionListEntry key={index} data={question} answers={props.answerParser(question.answers)}/>;
          }
          if (index >= 2) {
            // return <LoadMoreQuestions data={question} answers={props.answerParser(question.answers)} />; <-- add LoadMoreQuestions component
          }
        })}
      </div>
      <AddQuestion currentProductName={props.currentProductName} />
    </div>
  );
};

export default QuestionList;
