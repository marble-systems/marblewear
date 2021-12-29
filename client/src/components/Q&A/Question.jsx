import React from 'react';
import QuestionList from './Q&Alist.jsx';
import Moment from 'moment';

const Question = ({data}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <h5>Q: {data.question_body}</h5>
        </div>
        <div className="col-3">
          <p className="text-end">Helpful? Yes ({data.question_helpfulness}) | Add Answer</p>
        </div>
      </div>
    {/* <h5>A:</h5><div className="col-9 text-start">{data.answers.map((answer) => {
      return <div className="row">
        <p>{answer.body}</p>
      </div>
      <div className="row text-start"><p>by {answer.answerer_name}, {Moment(answer.date).format(MMMM Do, YYYY)}</p></div>
    })}</div> */}
    </div>
  )
}

export default Question;