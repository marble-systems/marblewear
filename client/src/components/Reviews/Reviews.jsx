import React from 'react';
import ReviewSummary from './ReviewSummary/index.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import sampleData from './reviewsData.js';

class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productId: null,
      selectedFilters: []
    };
  }

  updateFilters (selectedFilters) {
    this.setState({selectedFilters});
  }

  render() {
    let { reviewsMetadata, reviews } = sampleData;
    return (
      <div>
        <h3 style={{fontSize: '2em'}}>RATINGS &#38; REVIEWS</h3>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <ReviewSummary
            reviewsMetadata={reviewsMetadata}
            updateFilters={this.updateFilters.bind(this)}/>
          <ReviewList reviews={reviews.results} />
        </div>
      </div>
    );
  }
}
export default Reviews;
