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

  handleHelpfulClick() {
    console.log('handleHelpfulClick');
    // TODO: make a PUT request to /reviews/:review_id/helpful
    // https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/
  }

  handleReportClick() {
    let reviewReported = !this.state.reviewReported;
    this.setState({ reviewReported });
    console.log('handleReportClick');
    axios.puth('/reviews')
    // TODO: make a PUT request to /reviews/:review_id/report
  }

  render() {
    let { expanded, modalShowing, currentImage, reviewReported } = this.state;
    let { review } = this.props;
    let { rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos, review_id } = review;
    let modalImage = () => (<img src={currentImage}></img>);

    return (
      <div className="review-tile">
        {/* STARS USERNAME & DATE */}
        <div>
          <Stars rating={rating} />
          {`${reviewer_name}, ${formatDate(date)}`}
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
                onClick={this.handleShowMoreClick(this)}>
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
          {photos.map((url, idx) => {
            return (
              <div onClick={() => { this.handleToggleModalClick(url); }}
                key={`img-${review_id}-${idx}`}
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
        <span>
          Helpful? &nbsp;
          <a
            onClick={this.handleHelpfulClick}>
            Yes
          </a>
          {` (${helpfulness}) | `}
          { reviewReported
            ? <span>Reported</span>
            : <a onClick={this.handleReportClick}>Report</a>}
        </span>
      </div>
    );
  }
}

/* TODO:
 if user made transaction -> Verified purchaser (pending transaction API)
 prevent users from clicking buttons more than once (pending cookie/token implementation)
*/

ReviewListEntry.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewListEntry;