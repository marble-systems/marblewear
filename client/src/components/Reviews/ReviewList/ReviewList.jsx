import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry/ReviewListEntry.jsx';
import Modal from '../../SharedComponents/Modal.jsx';
import AddReviewForm from './AddReviewForm/AddReviewForm.jsx';

const sortOptions = ['Relevant', 'Helpful', 'Newest'];

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listLength: 2,
      sortBy: sortOptions[0],
      addReviewModal: {isShowing: false, body: () => { return (<AddReviewForm/>); } },
    };
    this.incrementListLength = this.incrementListLength.bind(this);
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
    this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
  }

  incrementListLength() {
    let { listLength } = this.state;
    listLength += 2;
    this.setState({ listLength });
    // TODO: make GET request for next page of reviews
    // if listLength >= .75 reviews.length
  }

  handleSelectorChange(e) {
    let idx = e.target.value;
    this.setState({ sortBy: sortOptions[idx] });
    // TODO: make GET request with new sort param
  }

  toggleModalVisibility() {
    let { addReviewModal } = this.state;
    addReviewModal.isShowing = !addReviewModal.isShowing;
    this.setState({ addReviewModal });
  }

  render() {
    let { reviews, starFilter, productName } = this.props;
    let { listLength, addReviewModal } = this.state;
    return (

      <div className="review-list-container">
        <span>
          {`${reviews.length} reviews, sorted by `}
          {/* SORT BY DROPDOWN SELECTOR */}
          <select onChange={this.handleSelectorChange}>
            {sortOptions.map((order, idx) => {
              return (
                <option
                  key={`sort-by-${order.toLowerCase()}`}
                  value={idx}>
                  {order}
                </option>
              );
            })}
          </select>
        </span>
        {reviews
          // FILTER BY STAR COUNT
          .filter(review => {
            return (
              starFilter.length === 0 ||
              starFilter.includes(review.rating));
          })
          // LIMIT/FILTER LIST LENGTH
          .filter((review, idx) => { return idx < listLength; })
          .map(review => {
            return (
              <ReviewListEntry key={review.review_id} review={review} />
            );
          })}
        {/* MORE REVIEWS & ADD REVIEW BUTTONS */}
        <div className="button-container">
          {/* MORE REVIEWS BUTTON */}
          {listLength >= reviews.length ? null :
            <button
              onClick={this.incrementListLength}>
              MORE REVIEWS
            </button>
          }
          {/* ADD REVIEW BUTTON */}
          <button onClick={this.toggleModalVisibility}>
          ADD A REVIEW  +
          </button>
          <Modal
            title={'Write Your Review'}
            subtitle={`About the ${productName}`}
            show={addReviewModal.isShowing}
            onClose={this.toggleModalVisibility}
            body={addReviewModal.body}
          />
        </div>
      </div>
    );
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  productName: PropTypes.string.isRequired,
  starFilter: PropTypes.array.isRequired
};

export default ReviewList;
