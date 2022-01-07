import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry/ReviewListEntry.jsx';
import Modal from '../../SharedComponents/Modal.jsx';
import AddReviewForm from './AddReviewForm/AddReviewForm.jsx';
import axios from 'axios';
import utilityFns from '../../../utilityFns.js';

const sortOptions = {relevant: 'Relevant', helpful: 'Helpful', newest: 'Newest'};

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listLength: 2,
      getReviewsRequestParams: { page: 0, count: 5, sort: sortOptions.relevant, product_id: null },
      addReviewModal: {isShowing: false, body: (productId, toggleModalVisibility) => { return (<AddReviewForm currentProductID={productId} toggleModalVisibility={toggleModalVisibility}/>); } },
    };
    this.incrementListLength = this.incrementListLength.bind(this);
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
    this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
  }

  incrementListLength() {
    let { listLength } = this.state;
    let { reviews } = this.props;
    let reviewsCount = reviews.length;
    listLength += 2;
    this.setState({ listLength });
    if (listLength > 0.75 * reviewsCount) {
      let { getReviewsRequestParams } = this.state;
      getReviewsRequestParams.product_id = this.props.currentProductID;
      getReviewsRequestParams.page += 2;
      let qs = utilityFns.generateUrlParams(getReviewsRequestParams);
      axios.get(`/reviews/?${qs}`)
        .then(res => {
          let { count, page, product, results } = res.data;
          Object.assign(getReviewsRequestParams, { count, page, product_id: product });
          this.setState({ getReviewsRequestParams });
          this.props.updateReviewList([...reviews, ...results]);
        })
        .catch(err => {
          console.error(`Error incrementing listLength: ${err}`);
        });
    }
  }

  handleSelectorChange(e) {
    let key = e.target.value;
    let { getReviewsRequestParams } = this.state;
    getReviewsRequestParams.product_id = this.props.currentProductID;
    getReviewsRequestParams.sort = key;
    getReviewsRequestParams.page += 1;
    let qs = utilityFns.generateUrlParams(getReviewsRequestParams);
    axios.get(`/reviews/?${qs}`)
      .then(res => {
        let { count, page, product, results } = res.data;
        Object.assign(getReviewsRequestParams, { count, page, product_id: product });
        this.setState({ getReviewsRequestParams });
        this.props.updateReviewList(results);
      })
      .catch(err => {
        console.error(`Error updating sort order: ${err}`);
      });
  }

  toggleModalVisibility() {
    let { addReviewModal } = this.state;
    addReviewModal.isShowing = !addReviewModal.isShowing;
    this.setState({ addReviewModal });
  }

  render() {
    let { reviews, starFilter, currentProductName, incrementHelpfulCount, currentProductID } = this.props;
    let { listLength, addReviewModal } = this.state;
    return (
      <div className="review-list-container">
        <span>
          {`${reviews.length} reviews, sorted by `}
          {/* SORT BY DROPDOWN SELECTOR */}
          <select onChange={this.handleSelectorChange}>
            {Object.keys(sortOptions).map((key) => {
              return (
                <option
                  key={`sort-by-${key}`}
                  value={key}>
                  {sortOptions[key]}
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
              <ReviewListEntry
                key={review.review_id}
                incrementHelpfulCount={incrementHelpfulCount}
                review={review} />
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
            subtitle={`About the ${currentProductName}`}
            show={addReviewModal.isShowing}
            onClose={this.toggleModalVisibility}
            body={addReviewModal.body.bind(null, currentProductID, this.toggleModalVisibility)}
          />
        </div>
      </div>
    );
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.array,
  currentProductName: PropTypes.string.isRequired,
  starFilter: PropTypes.array.isRequired,
  currentProductID: PropTypes.string,
  updateReviewList: PropTypes.func.isRequired,
  incrementHelpfulCount: PropTypes.func.isRequired
};

export default ReviewList;
