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
      getReviewsRequestParams: { page: 1, count: 100, sort: sortOptions.relevant, product_id: null },
      addReviewModal: {isShowing: false, body: (productId, toggleModalVisibility) => { return (<AddReviewForm currentProductID={productId} toggleModalVisibility={toggleModalVisibility}/>); } },
    };
    this.incrementListLength = this.incrementListLength.bind(this);
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
    this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
  }

  incrementListLength(filteredReviewsLength) {
    let { listLength } = this.state;
    let { reviews } = this.props;
    listLength += 2;
    this.setState({ listLength });
    if (listLength > 0.75 * filteredReviewsLength) {
      let { getReviewsRequestParams } = this.state;
      getReviewsRequestParams.product_id = this.props.currentProductID;
      getReviewsRequestParams.page += 1;
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
    let sortOrder = e.target.value;
    let { getReviewsRequestParams } = this.state;
    getReviewsRequestParams.product_id = this.props.currentProductID;
    getReviewsRequestParams.sort = sortOrder;
    let qs = utilityFns.generateUrlParams(getReviewsRequestParams);
    let context = this;
    axios.get(`/reviews/?${qs}`)
      .then(res => {
        let { count, page, product, results } = res.data;
        Object.assign(getReviewsRequestParams, { count, page: page + 1, product_id: product });
        context.setState({ getReviewsRequestParams });
        context.props.updateReviewList(results);
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
    let { reviews, starFilter, currentProductName, incrementHelpfulCount, currentProductID, totalReviews } = this.props;
    let { listLength, addReviewModal } = this.state;
    let filteredReviews = reviews// FILTER BY STAR COUNT
      .filter(review => {
        return (
          starFilter.length === 0 ||
          starFilter.includes(review.rating));
      })
      // LIMIT/FILTER LIST LENGTH
      .filter((review, idx) => { return idx < listLength;});
    return (
      <div className="review-list-container">
        <span>
          {`${totalReviews} reviews, sorted by `}
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
        {filteredReviews
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
              className="btn btn-light border-1 border-dark p-2 rounded-0"
              onClick={()=> {this.incrementListLength(filteredReviews.length);}}>
              MORE REVIEWS
            </button>
          }
          {/* ADD REVIEW BUTTON */}
          <button className="btn btn-light border-1 border-dark p-2 rounded-0" onClick={this.toggleModalVisibility}>
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
  incrementHelpfulCount: PropTypes.func.isRequired,
  totalReviews: PropTypes.number
};

export default ReviewList;
