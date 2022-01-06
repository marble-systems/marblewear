/* eslint-disable react/prop-types */
import React from 'react';
import AddAnswer from './AddAnswer.jsx';
import AnswerListEntry from './AnswerListEntry.jsx';
import axios from 'axios';

class QuestionListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answersShown: 2,
      helpfulClicked: false,
      reportClicked: false
    };
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
    this.showLessAnswers = this.showLessAnswers.bind(this);
  }

  /* ANSWERLIST LENGTH ALTERING FUNCTIONS */

  showMoreAnswers() {
    let { answersShown } = this.state;
    answersShown += 2;
    this.setState({ answersShown });
  }

  showLessAnswers() {
    this.setState({ answersShown: 2 });
  }

  render() {
    const { data, answers, currentProductName, handleAnswerInputChange, handleSubmitAnswer, question_id } = this.props;
    return (
      <div className="container">
        <div className="row pt-3">
          <div className="col-7">
            <h5>Q: {data.question_body}</h5>
          </div>
          <div className="col-5">
            <div className="row">
              <span className="text-end">Helpful? <button className="btn btn-link" onClick={this.markQuestionHelpful}>Yes</button> ({data.question_helpfulness}) | <AddAnswer currentProductName={currentProductName} currentQuestionBody={data.question_body} handleSubmitAnswer={handleSubmitAnswer} handleAnswerInputChange={handleAnswerInputChange} question_id={question_id} /></span>
            </div>
          </div>
        </div>
        <div className="d-inline-block">
          <h5 className="d-inline-block">A:</h5><div className="row">
            {answers
              .filter((a, i) => { return i < this.state.answersShown; })
              .map((answer, i) => {
                return i < this.state.answersShown ? <AnswerListEntry key={i} answer={answer} listLength={answers.length} /> : null;
              })}</div>
          {this.state.answersShown >= answers.length ? <button onClick={this.showLessAnswers}>
              Show Less Answers
          </button> :
            <button onClick={this.showMoreAnswers}>
                Show More Answers
            </button>
          }
        </div>
      </div>
    );
  }
}

export default QuestionListEntry;