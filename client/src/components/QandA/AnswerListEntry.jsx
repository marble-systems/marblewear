/* eslint-disable react/prop-types */
import React from 'react';
import Moment from 'moment';

const AnswerListEntry = ({ answer }) => {
  return (<div className="col-9 text-start">
    <div key={answer.id}>
      <div className="row pt-1"><p className="text-wrap">{answer.body}</p></div>
      <div className="hstack gap-3 fw-light">
        <div>by {answer.answerer_name}, {Moment(answer.date).format('MMMM Do, YYYY')}</div>
        <div className="vr"></div>
        <div>Helpful?</div><div className="text-decoration-underline">Yes</div><div>({answer.helpfulness})</div>
        <div className="vr"></div>
        <div className="text-decoration-underline">Report</div>
      </div>
    </div>
  </div>
  );
};

export default AnswerListEntry;