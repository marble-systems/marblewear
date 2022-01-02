import React from 'react';
import ReviewSummary from './ReviewSummary/ReviewSummary.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import sampleData from './reviewsData.js';
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
    let { reviewsMetadata, reviews } = sampleData;
    let { starFilter, productId } = this.state;
    return (
      <div>
        <h3>RATINGS &#38; REVIEWS</h3>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <ReviewSummary
            reviewsMetadata={reviewsMetadata}
            updateFilters={this.updateFilters.bind(this)}/>
          <ReviewList
            starFilter={starFilter}
            reviews={reviews.results} />
        </div>
      </div>
    );
  }
}
export default Reviews;
