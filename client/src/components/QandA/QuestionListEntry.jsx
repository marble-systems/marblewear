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
      questionHelpfulClicked: false,
      questionHelpfulCount: this.props.data.question_helpfulness
    };
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
    this.showLessAnswers = this.showLessAnswers.bind(this);
  }

  markQuestionHelpful(question_id) {
    this.state.questionHelpfulClicked ? null :
      axios({
        url: `/qa/questions/${question_id}/helpful`,
        method: 'put'
      })
        .then(() => {
          let { questionHelpfulCount } = this.state;
          questionHelpfulCount++;
          this.setState({questionHelpfulCount, questionHelpfulClicked: true});
        });
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
            <div className="fw-light text-end"><div className="pe-3 d-inline">Helpful?</div>
              <div className="pe-3 text-decoration-underline text-primary d-inline" type="button" onClick={() => {this.markQuestionHelpful(question_id);}}>Yes </div>
              <div className="pe-3 d-inline">({this.state.questionHelpfulCount})</div>
              <div className="vr"></div>
              <div className="ps-3 d-inline">
                <AddAnswer currentProductName={currentProductName} currentQuestionBody={data.question_body} handleSubmitAnswer={handleSubmitAnswer} handleAnswerInputChange={handleAnswerInputChange} question_id={question_id} />
              </div>
            </div>
          </div>
        </div>
        <div className="d-inline-flex">
          <h5>A:</h5><div>
            {answers
              .filter((a, i) => { return i < this.state.answersShown; })
              .map((answer, i) => {
                return i < this.state.answersShown ? <AnswerListEntry key={i} answer={answer} listLength={answers.length} question_id={question_id} /> : null;
              })}</div>
        </div>
        {answers.length > 2 ?
          this.state.answersShown > answers.length ? <button onClick={this.showLessAnswers}>
            Show Less Answers
          </button> :
            <button onClick={this.showMoreAnswers}>
              Show More Answers
            </button>
          : null
        }
      </div>
    );
  }
}

export default QuestionListEntry;