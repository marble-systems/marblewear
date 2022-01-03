import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry/ReviewListEntry.jsx';

const SORT_BY = ['Relevant', 'Helpful', 'Newest'];

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listLength: 2,
      sortBy: SORT_BY[0]
    };
    this.incrementListLength = this.incrementListLength.bind(this);
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
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
    this.setState({ sortBy: SORT_BY[idx] });
    // TODO: make GET request with new sort param
  }

  render() {
    let { reviews, starFilter } = this.props;
    let { listLength } = this.state;
    return (

      <div className="review-list-container">
        <span>
          {`${reviews.length} reviews, sorted by `}
          {/* SORT BY DROPDOWN SELECTOR */}
          <select onChange={this.handleSelectorChange}>
            {SORT_BY.map((order, idx) => {
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
          {listLength >= reviews.length ? null :
            <button
              onClick={this.incrementListLength}>
              MORE REVIEWS
            </button>
          }
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
