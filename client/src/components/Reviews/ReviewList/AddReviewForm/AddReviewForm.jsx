import React from 'react';
import Stars from '../../../SharedComponents/Stars.jsx';
import Modal from '../../../SharedComponents/Modal.jsx';


const RATING_TEXT = ['Poor', 'Fair', 'Average', 'Good', 'Great'];
const REVIEW_BODY_MIN_LENGTH = 50;
const CHARACTERISTICS_SCALE = {
  Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
};


class AddReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: null,
      radioValues: { 'recommend-product': 'yes' },
      reviewSummary: '',
      reviewBody: '',
      nickname: '',
      email: '',
      images: [],
      formValidationModal: { isShowing: false, title: '', body: () => { } }
    };
    this.handleOverallRatingInput = this.handleOverallRatingInput.bind(this);
    this.handleRadioSelectorChange = this.handleRadioSelectorChange.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleTextAreaInput = this.handleTextAreaInput.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.handleToggleModalClick = this.handleToggleModalClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOverallRatingInput(starCount) {
    this.setState({ overallRating: starCount });
  }

  handleRadioSelectorChange(e) {
    let radioValues = this.state.radioValues;
    radioValues[e.target.name] = e.target.value;
    this.setState({ radioValues });
  }

  handleTextInput(e) {
    let targetId = e.target.id;
    if (targetId === 'nickname-input') {
      let nickname = e.target.value;
      this.setState({ nickname });
    } else if (targetId === 'summary-input') {
      let reviewSummary = e.target.value;
      this.setState({ reviewSummary });
    } else if (targetId === 'email-input') {
      let email = e.target.value;
      this.setState({ email });
    }
  }

  handleTextAreaInput(e) {
    let reviewBody = e.target.value;
    this.setState({ reviewBody });
  }

  handleImageUpload(e) {
    let { images } = this.state;
    if (e.target.files && e.target.files[0]) {
      let imageUrl = URL.createObjectURL(e.target.files[0]);
      images.push(imageUrl);
      this.setState({ images: images.slice(Math.max(images.length - 5, 0)) });
      // include only 5 most recently selected images
    }
  }

  removeImage(selectedImage) {
    let { images } = this.state;
    let idx = images.findIndex(image => image === selectedImage);
    images.splice(idx, 1);
    this.setState({ images });
  }

  handleToggleModalClick() {
    let formValidationModal = this.state.formValidationModal;
    formValidationModal.isShowing = !formValidationModal.isShowing;
    this.setState({ formValidationModal });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { overallRating, radioValues, reviewBody, nickname, email } = this.state;
    let characteristics = Object.keys(CHARACTERISTICS_SCALE);

    // Check for missing inputs
    let missingInputs = characteristics.filter(characteristic => { return !radioValues[characteristic]; });
    let inputsObject = { 'Overall rating': overallRating, 'Review body': reviewBody, 'Nickname': nickname, 'Email': email };
    missingInputs.push(...Object.keys(inputsObject).filter(key => { return !inputsObject[key]; }));
    if (!overallRating || !reviewBody || !nickname || !email) {
      let formValidationModal = this.state.formValidationModal;
      formValidationModal.body = () => {
        return (
          <div>
            You must enter the following:
            <ol>
              {missingInputs.map((input, idx) => {
                return (
                  <li key={`missing-input-${idx}`}>
                    {input}
                  </li>
                );
              })}
            </ol>
          </div>
        );
      };
      formValidationModal.title = 'Missing Input';
      this.setState({ formValidationModal });
      this.handleToggleModalClick();
      return;
    }
    // TODOs:
    // validate email format
    // validate body length
    // validate image format and upload
    // TODO: make POST request to POST /reviews endpoint
  }

  render() {
    let { overallRating, radioValues, reviewSummary, reviewBody, nickname, email, images, formValidationModal } = this.state;
    return (
      <div style={{ width: '20em' }}>
        <form id="review-form">
          <ol>
            <li className="required">Overall Rating</li>
            <p>
              <Stars
                rating={overallRating}
                handleStarClick={this.handleOverallRatingInput} />
              <span style={{ fontSize: '0.5em' }}>
                {RATING_TEXT[overallRating - 1]}
              </span>
            </p>
            <p>
              <li className="required">Do you recommend this product</li>
              <p>
                <input
                  onChange={this.handleRadioSelectorChange}
                  checked={radioValues['recommend-product'] === 'yes'}
                  type="radio"
                  name="recommend-product"
                  value="yes" />
                <label htmlFor="recommend-yes">Yes</label>
                <input
                  onChange={this.handleRadioSelectorChange}
                  checked={radioValues['recommend-product'] === 'no'}
                  type="radio"
                  name="recommend-product"
                  value="no" />
                <label htmlFor="recommend-no">No</label>
              </p>
            </p>
            <p>
              <li className="required">Characteristics</li>
              <p>
                {Object.keys(CHARACTERISTICS_SCALE).map((characteristic, idx1) => {
                  return (
                    <div key={`selector-${idx1}`}>
                      <div>{`${characteristic}: ${radioValues[characteristic]
                        ? CHARACTERISTICS_SCALE[characteristic][Number(radioValues[characteristic])]
                        : 'None selected'}`}</div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                      }}>
                        {Array(5).fill(0).map((val, idx2) => {
                          return (
                            <input
                              required
                              style={{ marginRight: '10px' }}
                              key={`selector-${idx1}-${idx2}`}
                              type="radio"
                              name={`${characteristic}`}
                              value={idx2}
                              checked={idx2 === Number(radioValues[characteristic])}
                              onChange={this.handleRadioSelectorChange} />
                          );
                        })}
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.5em', flexDirection: 'row'
                      }}>
                        <div>{CHARACTERISTICS_SCALE[characteristic][0]}</div>
                        <div>{CHARACTERISTICS_SCALE[characteristic][4]}</div>
                      </div>
                    </div>
                  );
                })}
              </p>
            </p>

            <li>Review Summary</li>
            <p>
              <input
                id="summary-input"
                onChange={this.handleTextInput}
                value={reviewSummary}
                placeholder="Example: Best purchase ever!"
                maxLength="60"
                type="text" />
            </p>

            <li className="required">Review body</li>
            <p>
              <input
                required
                onChange={this.handleTextAreaInput}
                value={reviewBody}
                placeholder="Why did you like the product or not?"
                minLength={REVIEW_BODY_MIN_LENGTH}
                maxLength="1000"
                type="textarea" />
              <div style={{ fontSize: '0.5em' }}>{reviewBody.length < REVIEW_BODY_MIN_LENGTH ?
                `Minimum required characters left ${REVIEW_BODY_MIN_LENGTH - reviewBody.length}`
                : 'Minimum reached'}
              </div>
            </p>

            <li>Upload your photos</li>
            <p>

              <div style={{
                display: 'flex',
                flexDirection: 'row'
              }}
                className="image-thumbnails">
                {images.map((url, idx) => {
                  return (
                    // FIX: modal gets too wide when image is selected
                    <img
                      onClick={() => { this.removeImage(url); }}
                      style={{ width: '15%', marginRight: '5px' }}
                      key={`thumbnail-${idx}`}
                      src={url} />
                  );
                })}
              </div>

              {images.length < 5
                ?
                <input
                  type="file"
                  name="user-images"
                  onChange={this.handleImageUpload}
                />
                :
                null
              }
            </p>

            <li className="required">What is your nickname</li>
            <p>
              <input
                required
                id="nickname-input"
                onChange={this.handleTextInput}
                value={nickname}
                placeholder="Example: jackson11!"
                maxLength="60"
                type="text" />
              <div style={{ fontSize: '0.5em' }}>
                For privacy reasons, do not use your full name or email address
              </div>
            </p>

            <li className="required">Your email</li>
            <p>
              <input
                required
                id="email-input"
                onChange={this.handleTextInput}
                value={email}
                placeholder="Example: jackson11@email.com"
                maxLength="60"
                type="email" />
              <div style={{ fontSize: '0.5em' }}>
                For authentication reasons, you will not be emailed
              </div>
            </p>
          </ol>
          <input
            type="submit"
            value="Submit"
            onClick={this.handleSubmit} />
        </form>
        <Modal
          title={formValidationModal.title}
          onClose={this.handleToggleModalClick}
          body={formValidationModal.body}
          show={formValidationModal.isShowing} />
      </div>
    );
  }
}

export default AddReviewForm;
