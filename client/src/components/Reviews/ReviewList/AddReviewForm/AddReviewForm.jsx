import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Stars from '../../../SharedComponents/Stars.jsx';

const RATING_TEXT = ['Poor', 'Fair', 'Average', 'Good', 'Great'];
const REVIEW_BODY_MIN_LENGTH = 50;
const REVIEW_BODY_MAX_LENGTH = 1000;
const CHARACTERISTICS_SCALE = {
  Size: { options: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'], id: 131851 },
  Width: { options: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'], id: 131852 },
  Comfort: { options: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'], id: 131853 },
  Quality: { options: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'], id: 131854 },
  Length: { options: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'], id: 131844 },
  Fit: { options: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'], id: 131847 }
};

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: 0,
      radioValues: { 'recommend-product': 'yes' },
      reviewSummary: '',
      reviewBody: '',
      nickname: '',
      email: '',
      images: [],
    };
    this.handleOverallRatingInput = this.handleOverallRatingInput.bind(this);
    this.handleRadioSelectorChange = this.handleRadioSelectorChange.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleTextAreaInput = this.handleTextAreaInput.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.removeImage = this.removeImage.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    let { currentProductID, toggleModalVisibility } = this.props;
    let { overallRating, radioValues, reviewBody, nickname, email, reviewSummary, images } = this.state;
    let characteristics = Object.keys(CHARACTERISTICS_SCALE);
    let validEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    // Check for missing inputs
    let missingInputs = characteristics
      .filter(characteristic => {
        let characteristicId = CHARACTERISTICS_SCALE[characteristic]['id'];
        return !radioValues[characteristicId];
      });
    let inputsObject = { 'Overall rating': overallRating, 'Review body': reviewBody, 'Nickname': nickname, 'Email': email };
    missingInputs.push(...Object.keys(inputsObject).filter(key => { return !inputsObject[key]; }));
    if (!overallRating || !reviewBody || !nickname || !email) {
      alert(`You must enter: \n${missingInputs.join(', ').replace(/, ([^,]*)$/, ' and $1')}`);
      return;
    } else if (!validEmail) {
      alert('Invalid email format');
      return;
    } else if (reviewBody.length > REVIEW_BODY_MAX_LENGTH) {
      alert(`Review body must not exceed ${REVIEW_BODY_MAX_LENGTH} characters in length`);
      return;
    } else if (reviewBody.length < REVIEW_BODY_MIN_LENGTH) {
      alert(`Review body must be at least ${REVIEW_BODY_MIN_LENGTH} characters long`);
      return;
    }
    // get form data from state and update key names
    let postBody = {
      product_id: Number(currentProductID),
      rating: overallRating,
      summary: reviewSummary,
      body: reviewBody,
      recommend: (radioValues['recommend-product'] === 'yes'),
      name: nickname,
      email,
      photos: images,
      characteristics: Object.keys(radioValues)
        .filter(key => key !== 'recommend-product')
        .reduce((acc, key) => {
          acc[key] = Number(radioValues[key]) + 1;
          return acc;
        }, {})
    };
    axios.post('/reviews', postBody)
      .then(res => {
        toggleModalVisibility();
        // reset form data
        this.setState({
          overallRating: 0, radioValues: { 'recommend-product': 'yes' },
          reviewSummary: '', reviewBody: '', nickname: '', email: '', images: [],
        });
        // TODO: append new review to the DOM
        alert('Review submitted!');
      })
      .catch(err => {
        console.error(`Error: ${err}`);
        alert('Unable to submit review. Please try again later.');
      });
    // TODOs:
    // validate image format and upload
  }

  render() {
    let { overallRating, radioValues, reviewSummary, reviewBody, nickname, email, images } = this.state;
    return (
      <div style={{ width: '40em' }}>
        <form id="review-form">
          <ol>
            <li className="required">Overall Rating</li>
            <div>
              <Stars
                rating={overallRating}
                handleStarClick={this.handleOverallRatingInput} />
              <span style={{ fontSize: '0.5em' }}>
                {RATING_TEXT[overallRating - 1]}
              </span>
            </div>
            <div>
              <li className="required">Do you recommend this product</li>
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
            </div>
            <div>
              <li className="required">Characteristics</li>
              {Object.keys(CHARACTERISTICS_SCALE).map((characteristic) => {
                let optionId = CHARACTERISTICS_SCALE[characteristic]['id'];
                return (
                  <div key={`selector-${optionId}`}>
                    <div>{`${characteristic}: ${radioValues[optionId]
                      ? CHARACTERISTICS_SCALE[characteristic]['options'][Number(radioValues[optionId])]
                      : 'None selected'}`}</div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'row'
                    }}>
                      {Array(5).fill(0).map((val, idx) => {
                        return (
                          <input
                            required
                            style={{ marginRight: '10px' }}
                            key={`selector-${optionId}-${idx}`}
                            type="radio"
                            name={optionId}
                            value={idx}
                            checked={idx === Number(radioValues[optionId])}
                            onChange={this.handleRadioSelectorChange} />
                        );
                      })}
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.5em', flexDirection: 'row'
                    }}>
                      <div>{CHARACTERISTICS_SCALE[characteristic]['options'][0]}</div>
                      <div>{CHARACTERISTICS_SCALE[characteristic]['options'][4]}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <li>Review Summary</li>
            <div>
              <input
                id="summary-input"
                onChange={this.handleTextInput}
                value={reviewSummary}
                placeholder="Example: Best purchase ever!"
                maxLength="60"
                type="text" />
            </div>

            <li className="required">Review body</li>
            <div>
              <input
                required
                onChange={this.handleTextAreaInput}
                value={reviewBody}
                placeholder="Why did you like the product or not?"
                minLength={REVIEW_BODY_MIN_LENGTH}
                maxLength={REVIEW_BODY_MAX_LENGTH}
                type="textarea" />
              <div style={{ fontSize: '0.5em' }}>{reviewBody.length < REVIEW_BODY_MIN_LENGTH ?
                `Minimum required characters left ${REVIEW_BODY_MIN_LENGTH - reviewBody.length}`
                : 'Minimum reached'}
              </div>
            </div>

            <li>Upload your photos</li>
            <div>

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
            </div>

            <li className="required">What is your nickname</li>
            <div>
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
            </div>

            <li className="required">Your email</li>
            <div>
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
            </div>
          </ol>
          <input
            type="submit"
            value="Submit"
            onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

AddReviewForm.propTypes = {
  currentProductID: PropTypes.string.isRequired,
  toggleModalVisibility: PropTypes.func.isRequired
};

export default AddReviewForm;
