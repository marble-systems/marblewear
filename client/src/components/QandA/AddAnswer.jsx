/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerEntry: '',
      nicknameEntry: '',
      emailEntry: '',
      addedPhotos: [],
      currentQuestionID: props.question_id
    };
    this.handleAnswerInputChange = this.handleAnswerInputChange.bind(this);
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
  }

  handleSubmitAnswer(e, currentQuestionID) {
    e.preventDefault();
    const { answerEntry, nicknameEntry, emailEntry } = this.state;
    axios({
      url: `/qa/questions/${currentQuestionID}/answers`,
      method: 'post',
      data: {
        body: answerEntry,
        name: nicknameEntry,
        email: emailEntry,
        photos: []
      }
    });
    this.setState({ answerEntry: '', nicknameEntry: '', emailEntry: '', addedPhotos: [] });
  }

  handleAnswerInputChange(e) {
    if (e.target.id === 'formControlAnswerEntry') {
      this.setState({ answerEntry: e.target.value });
    }
    if (e.target.id === 'formControlNicknameEntry') {
      this.setState({ nicknameEntry: e.target.value });
    }
    if (e.target.id === 'formControlEmailEntry') {
      this.setState({ emailEntry: e.target.value });
    }
  }

  render() {
    const { question_id } = this.props;
    return (
      <div className="d-inline-block">
        <div type="button" className="text-decoration-underline text-primary d-inline-block" data-bs-toggle="modal" data-bs-target={`#p${question_id}`}> Add Answer</div>
        <div className="modal fade" id={`p${question_id}`} tabIndex="-1" aria-labelledby="addAnswerModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-start" id="addAnswerModalLabel">Submit Your Answer for--</h5>
                <h6 className="modal-title text-center" id="addAnswerModalLabel">{this.props.currentProductName}: {this.props.currentQuestionBody}</h6>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-start">
                <div className="mb-3">
                  <label htmlFor="formControlQuestionEntry" className="form-label">Your Answer</label>
                  <textarea onChange={this.handleAnswerInputChange} className="form-control" id="formControlAnswerEntry" required={true} rows="10" maxLength="1000" placeholder="Type your answer here (max characters: 1000)"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="formControlNicknameEntry" className="form-label">What is your nickname</label>
                  <input onChange={this.handleAnswerInputChange} className="form-control" id="formControlNicknameEntry" maxLength="60" placeholder="Example: jack543!"></input>
                </div>
                <p className="fw-light fst-italic">For privacy reasons, do not use your full name or email address</p>
                <div className="mb-3">
                  <label htmlFor="formControlEmailEntry" className="form-label">Email address</label>
                  <input onChange={this.handleAnswerInputChange} type="email" className="form-control" id="formControlEmailEntry" required={true} maxLength="60" placeholder="jack@example.com"></input>
                </div>
                <p className="fw-light fst-italic">For authentication reasons, you will not be emailed</p>
                <button type="button" className="btn btn-light border-4 border-dark" onClick={() => {console.log('TO BE IMPLEMENTED');}}>Upload your photos</button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light border-4 border-dark" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-light border-4 border-dark" onClick={(e) => {this.handleSubmitAnswer(e, this.state.currentQuestionID);}}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAnswer;