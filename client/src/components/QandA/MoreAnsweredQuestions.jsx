/* eslint-disable react/prop-types */
import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';

const MoreAnsweredQuestions = (props) => {
  return (
    <button className="btn btn-light border-4 border-dark" id="loadMoreQuestionsButton" onClick={() => {
      let x = document.getElementById('loadMoreQuestionsButton');
      if (x.style.display === 'none') {
        x.style.display = 'inline';
      } else {
        x.style.display = 'none';
        return <div className="container">
          {props.data.map((question, index) => {
            if (index < 2) {
              return <QuestionListEntry key={index} data={question} currentProductName={props.currentProductName} answers={props.answerParser(question.answers)} />;
            }
            if (props.data.length > 2) {
              return <div className="inline-flex">
                <MoreAnsweredQuestions data={props.data.slice(2)} currentProductName={props.currentProductName} answers={props.data.slice(2).map((question) => {
                  return props.answerParser(question.answers);
                })} />
              </div>;
            }
          })}
        </div>;
      }
    }}>Load More Questions</button>
  );
};


export default MoreAnsweredQuestions;