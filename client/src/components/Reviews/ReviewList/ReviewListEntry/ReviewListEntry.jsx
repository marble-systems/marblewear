import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../../../SharedComponents/Stars.jsx';
import Modal from '../../../SharedComponents/Modal.jsx';
import axios from 'axios';

const SUMMARY_CHAR_LIMIT = 60;
const BODY_CHAR_LIMIT = 250;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const formatDate = (input) => {
  var date = new Date(input);
  return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
const checkmarkIcon = () => {
  return (<svg height="24px" viewBox="0 0 24 24" width="24px" fill="green">
    <path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>);
};

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      currentImage: '',
      modalShowing: false,
      reviewReported: false,
      reviewHelpful: false
    };
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
    this.handleToggleModalClick = this.handleToggleModalClick.bind(this);
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
    this.handleReportClick = this.handleReportClick.bind(this);
  }

  handleShowMoreClick() {
    let expanded = !this.state.expanded;
    this.setState({ expanded });
  }

  handleToggleModalClick(currentImage) {
    let modalShowing = !this.state.modalShowing;
    this.setState({ currentImage, modalShowing });
  }

  handleHelpfulClick(review_id) {
    let reviewHelpful = true;
    this.setState({ reviewHelpful });
    axios.put(`/reviews/${review_id}/helpful`)
      .then(res => {
        this.props.incrementHelpfulCount(review_id);
      });
  }

  handleReportClick(review_id) {
    let reviewReported = true;
    axios.put(`/reviews/${review_id}/report`)
      .then(res => {
        this.setState({ reviewReported });
      });
  }

  render() {
    let { expanded, modalShowing, currentImage, reviewReported, reviewHelpful } = this.state;
    let { review } = this.props;
    let { rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos, review_id } = review;
    let modalImage = () => (<img src={currentImage}></img>);

    return (
      <div className="review-tile">
        {/* STARS USERNAME & DATE */}
        <div className="review-tile-header">
          <Stars rating={rating} />
          <div className="secondary-text">
            {`${reviewer_name}, ${formatDate(date)}`}
          </div>
        </div>

        {/* REVIEW SUMMARY */}
        <div className="review-tile-summary">
          {summary.length > SUMMARY_CHAR_LIMIT
            ? `${summary.substring(0, SUMMARY_CHAR_LIMIT)}...`
            : summary}
        </div>

        {/* REVIEW BODY */}
        <div>
          {(body.length <= BODY_CHAR_LIMIT || expanded)
            ? body
            : <span>{body.substring(0, BODY_CHAR_LIMIT)}...
              <a
                onClick={this.handleShowMoreClick}>
                Show more
              </a>
            </span>}
        </div>

        {/* RECOMMENDATION */}
        <div>
          {recommend
            ? <div>
              {checkmarkIcon()}
              I recommend this product
            </div>
            : ''}
        </div>

        {/* RESPONSE */}
        <div>
          {response ? `Response from seller: ${response}` : ''}
        </div>

        {/* IMAGES */}
        <div className="review-tile-images">
          {photos.map((imgData) => {
            let { url, id } = imgData;
            let invalidURL = /^http:\/\/[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-]+$/.test(url);
            if (invalidURL) {
              return null;
            }
            return (
              <div onClick={() => { this.handleToggleModalClick(url); }}
                key={`img-${review_id}-${id}`}
                className="review-tile-image">
                <img src={url} width='50px' />
              </div>
            );
          })
          }
        </div>

        {/* FULL-RES IMAGE MODAL */}
        <Modal
          show={modalShowing}
          body={modalImage}
          onClose={this.handleToggleModalClick}/>

        {/* HELPFUL? YES REPORT */}
        <span className="secondary-text">
          Helpful? &nbsp;
          { reviewHelpful
            ? <span>Yes</span>
            : <a onClick={()=>{this.handleHelpfulClick(review_id);}}>Yes</a>
          }
          {` (${helpfulness}) | `}
          { reviewReported
            ? <span>Reported</span>
            : <a onClick={()=>{this.handleReportClick(review_id);}}>Report</a>}
        </span>
      </div>
    );
  }
}

/* TODO:
 if user made transaction -> Verified purchaser (pending transaction API)
*/

ReviewListEntry.propTypes = {
  review: PropTypes.object.isRequired,
  incrementHelpfulCount: PropTypes.func.isRequired
};

export default ReviewListEntry;