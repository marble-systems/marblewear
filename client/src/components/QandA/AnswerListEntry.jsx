/* eslint-disable react/prop-types */
import React from 'react';
import Moment from 'moment';
import axios from 'axios';

class AnswerListEntry extends React.Component {
  constructor(props) {
    super(props);
    const { answer } = this.props;
    this.state = {
      answerHelpfulClicked: false,
      answerHelpfulCount: answer.helpfulness,
      answerReportClicked: false,
      reportType: 'button'
    };
    this.markAnswer = this.markAnswer.bind(this);
  }

  markAnswer(e, answer_id) {
    const handlerType = e.target.id;
    const { answerHelpfulClicked, answerReportClicked } = this.state;
    handlerType === 'helpful' && answerHelpfulClicked || handlerType === 'report' && answerReportClicked ?
      console.log('You can only increment once.') :
      axios({
        url: `/qa/answers/${answer_id}/${handlerType}`,
        method: 'put'
      })
        .then(() => {
          if (handlerType === 'helpful') {
            let { answerHelpfulCount } = this.state;
            answerHelpfulCount++;
            this.setState({ answerHelpfulCount, answerHelpfulClicked: true });
          } else if (handlerType === 'report') {
            this.setState({ answerReportClicked: true, reportType: 'text'});
          }
        });
  }

  render() {
    const { answer } = this.props;
    return (<div className="col-9 text-start">
      <div key={answer.id}>
        <div className="row pt-1"><p className="text-wrap">{answer.body}</p></div>
        <div className="pb-2 fw-light d-inline">
          <div className="d-inline pe-3">by {answer.answerer_name}, {Moment(answer.date).format('MMMM Do, YYYY')}</div>
          <div className="vr"></div>
          <div className="d-inline ps-3">Helpful?</div>
          <div className="pe-3 text-decoration-underline text-primary d-inline ps-3" id="helpful" type="button" onClick={(e) => { this.markAnswer(e, answer.id); }}>Yes </div>
          <div className="d-inline pe-3">({this.state.answerHelpfulCount})</div>
          <div className="vr"></div>
          <div className="text-decoration-underline text-primary d-inline ps-3" id="report" type={this.state.reportType} onClick={(e) => { this.markAnswer(e, answer.id); }}>Report</div>
        </div>
      </div>
    </div>
    );
  }
}

export default AnswerListEntry;