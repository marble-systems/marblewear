/* eslint-disable react/prop-types */
import React from 'react';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionEntry: '',
      nicknameEntry: '',
      emailEntry: '',
    };
    this.handleChange = this.handleChange.bind(this);
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
    // ensure that both question and email fields have been filled out and are valid formats via helper functions
    // when API is implemented, use axios POST request to submit data to API
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
                  <label htmlFor="formControlQuestionEntry" className="form-label">Your Question (mandatory)</label>
                  <textarea onChange={this.handleChange} className="form-control" id="formControlQuestionEntry" rows="10" maxLength="1000" placeholder="Type your question here (max characters: 1000)"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="formControlNicknameEntry" className="form-label">What is your nickname (optional)</label>
                  <input onChange={this.handleChange} className="form-control" id="formControlNicknameEntry" placeholder="Example: jackson11!"></input>
                </div>
                <p className="fw-light fst-italic">For privacy reasons, do not use your full name or email address</p>
                <div className="mb-3">
                  <label htmlFor="formControlEmailEntry" className="form-label">Email address (mandatory)</label>
                  <input onChange={this.handleChange} type="email" className="form-control" id="formControlEmailEntry" placeholder="name@example.com"></input>
                </div>
                <p className="fw-light fst-italic">For authentication reasons, you will not be emailed</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light border-4 border-dark" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-light border-4 border-dark" onSubmit={this.handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddQuestion;