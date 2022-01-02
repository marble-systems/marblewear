/* eslint-disable react/prop-types */
import React from 'react';
import Moment from 'moment';
import AddAnswer from './AddAnswer.jsx';

const QuestionListEntry = ({ data, answers, currentProductName }) => {
  return (
    <div className="container">
      <div className="row pt-3">
        <div className="col-9">
          <h5>Q: {data.question_body}</h5>
        </div>
        <div className="col-3">
          <div className="row">
            <p className="text-end">Helpful? Yes ({data.question_helpfulness}) | <AddAnswer currentProductName={currentProductName} currentQuestionBody={data.question_body} /></p>
          </div>
        </div>
      </div>
      <div>
        {answers.map((answer, i) => {
          return answers.length ? <div className="col-9 text-start"><h5>A:</h5>
            <div key={i}>
              <div className="row pt-1"><p className="text-wrap">{answer.body}</p></div>
              <div className="hstack gap-3 fw-light">
                <div>by {answer.answerer_name}, {Moment(answer.date).format('MMMM Do, YYYY')}</div>
                <div className="vr"></div>
                <div>Helpful?</div><div className="text-decoration-underline">Yes</div><div>({answer.helpfulness})</div>
                <div className="vr"></div>
                <div className="text-decoration-underline">Report</div>
              </div>
            </div>
          </div> : null;
        })}
      </div>
    </div>
  );
};

export default QuestionListEntry;