/* eslint-disable react/prop-types */
import React from 'react';
const axios = require('axios');

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionEntry: '',
      nicknameEntry: '',
      emailEntry: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    if (e.target.id === 'formControlQuestionEntry') {
      this.setState({questionEntry: e.target.value});
    }
    if (e.target.id === 'formControlNicknameEntry') {
      this.setState({nicknameEntry: e.target.value});
    }
    if (e.target.id === 'formControlEmailEntry') {
      this.setState({emailEntry: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { questionEntry, nicknameEntry, emailEntry } = this.state;
    axios({
      url: '/qa/questions/',
      method: 'post',
      data: {
        answers: [],
        asker_email: emailEntry,
        asker_name: nicknameEntry,
        body: questionEntry,
        date_written: new Date(),
        helpful: 0,
        id: null,
        product_id: this.props.currentProductID,
        reported: false,
      }
    });
    this.setState({questionEntry: '', nicknameEntry: '', emailEntry: ''});
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-light border-4 border-dark" data-bs-toggle="modal" data-bs-target="#addQuestionModal">Add A Question +</button>
        <div className="modal fade" id="addQuestionModal" tabIndex="-1" aria-labelledby="addQuestionModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addQuestionModalLabel">Ask Your Question - </h5>
                <h6 className="modal-title" id="addQuestionModalLabel">About the {this.props.currentProductName}</h6>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="formControlQuestionEntry" className="form-label">Your Question</label>
                  <textarea onChange={this.handleInputChange} className="form-control" id="formControlQuestionEntry" required="true" rows="10" maxLength="1000" placeholder="Type your question here (max characters: 1000)"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="formControlNicknameEntry" className="form-label">What is your nickname</label>
                  <input onChange={this.handleInputChange} className="form-control" id="formControlNicknameEntry" maxLength="60" required="false" placeholder="Example: jackson11!"></input>
                </div>
                <p className="fw-light fst-italic">For privacy reasons, do not use your full name or email address</p>
                <div className="mb-3">
                  <label htmlFor="formControlEmailEntry" className="form-label">Email address</label>
                  <input onChange={this.handleInputChange} type="email" className="form-control" id="formControlEmailEntry" maxLength="60" required="true" placeholder="name@example.com"></input>
                </div>
                <p className="fw-light fst-italic">For authentication reasons, you will not be emailed</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light border-4 border-dark" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-light border-4 border-dark" onClick={(e) => {this.handleSubmit(e);}}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddQuestion;