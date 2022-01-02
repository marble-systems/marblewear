/* eslint-disable react/prop-types */
import React from 'react';

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerEntry: '',
      nicknameEntry: '',
      emailEntry: '',
      addedPhotos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) { // this function isn't yet implemented. FIX ME
    if (e.target === 'answer') { // determine distinguishing target value for corresponding input
      this.setState({ answerEntry: e.target.value });
    }
    if (e.target === 'nickname') {
      this.setState({ nicknameEntry: e.target.value });
    }
    if (e.target === 'email') {
      this.setState({ emailEntry: e.target.value });
    }
  }

  handleClick() {
    // separate modal allowing up to five photos to be submitted. Should show thumbnails of each added image.
    // after five photos uploaded, button disappears.
  }

  handleSubmit(e) {
    e.preventDefault();
    // ensure that both answer and email fields have been filled out and are valid formats via helper functions (add required="true" to these)
    // when API is implemented, use axios POST request to submit data to API
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#addAnswerModal">Add Answer</button>
        <div className="modal fade" id="addAnswerModal" tabIndex="-1" aria-labelledby="addAnswerModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addAnswerModalLabel">Submit Your Answer for--</h5>
                <h6 className="modal-title" id="addAnswerModalLabel">{this.props.currentProductName}: {this.props.currentQuestionBody}</h6>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="formControlQuestionEntry" className="form-label">Your Question (mandatory)</label>
                  <textarea onChange={this.handleChange} className="form-control" id="formControlQuestionEntry" rows="10" maxLength="1000" placeholder="Type your answer here (max characters: 1000)"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="formControlNicknameEntry" className="form-label">What is your nickname (optional)</label>
                  <input onChange={this.handleChange} className="form-control" id="formControlNicknameEntry" placeholder="Example: jack543!"></input>
                </div>
                <p className="fw-light fst-italic">For privacy reasons, do not use your full name or email address</p>
                <div className="mb-3">
                  <label htmlFor="formControlEmailEntry" className="form-label">Email address (mandatory)</label>
                  <input onChange={this.handleChange} type="email" className="form-control" id="formControlEmailEntry" placeholder="jack@example.com"></input>
                </div>
                <p className="fw-light fst-italic">For authentication reasons, you will not be emailed</p>
                <button type="button" className="btn btn-light border-4 border-dark" onClick={this.handleClick()}>Upload your photos</button>
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

export default AddAnswer;