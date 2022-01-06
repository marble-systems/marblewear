import React from 'react';
import PropTypes from 'prop-types';
import ReviewSummary from './ReviewSummary/ReviewSummary.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import './reviews.css';

class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productId: null,
      starFilter: []
    };
  }

  updateFilters (starFilter) {
    this.setState({starFilter});
  }

  render() {
    let { starFilter } = this.state;
    let { reviewsData, currentProductID, currentProductName, updateReviewList, incrementHelpfulCount } = this.props;
    let { reviewsMetadata, reviews } = reviewsData;
    return (
      <div id="reviews-component">
        <h3>RATINGS &#38; REVIEWS</h3>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <ReviewSummary
            reviewsMetadata={reviewsMetadata}
            updateFilters={this.updateFilters.bind(this)}/>
          <ReviewList
            currentProductName={currentProductName}
            starFilter={starFilter}
            currentProductID={currentProductID}
            reviews={reviews.results}
            incrementHelpfulCount={incrementHelpfulCount}
            updateReviewList={updateReviewList} />
        </div>
      </div>
    );
  }
}

Reviews.propTypes = {
  reviewsData: PropTypes.object,
  currentProductID: PropTypes.string,
  currentProductName: PropTypes.string,
  updateReviewList: PropTypes.func.isRequired,
  incrementHelpfulCount: PropTypes.func.isRequired
};

export default Reviews;
