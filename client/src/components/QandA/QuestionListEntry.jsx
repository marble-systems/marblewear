/* eslint-disable react/prop-types */
import React from 'react';
import Moment from 'moment';
import AddAnswer from './AddAnswer.jsx';

const QuestionListEntry = ({ data, answers, currentProductName }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <h5>Q: {data.question_body}</h5>
        </div>
        <div className="col-3">
          <div className="row">
            <p className="text-end">Helpful? Yes ({data.question_helpfulness}) | <AddAnswer currentProductName={currentProductName} currentQuestionBody={data.question_body} /></p>
          </div>
        </div>
      </div>
      <div className="col-9 text-start"><h5>A:</h5>
        {answers.map((answer, i) => {
          if (answers.length) {
            return <div key={i}>
              <div className="row"><p className="text-wrap">{answer.body}</p></div>
              <div className="row text-start"><p className="fw-light">by {answer.answerer_name}, {Moment(answer.date).format('MMMM Do, YYYY')} | Helpful? Yes ({answer.helpfulness})</p></div>
              {/* Check out ReviewListEntry.jsx for reference on making a PUT request */}
            </div>;
          }
        })}
      </div>
    </div>
  );
};

export default QuestionListEntry;