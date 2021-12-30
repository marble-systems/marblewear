import React from 'react';
import ReviewSummary from './ReviewSummary/index.jsx';
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
    return (
      <div>
        <h3 style={{fontSize: '2em'}}>RATINGS &#38; REVIEWS</h3>
        <ReviewSummary
          reviewsMetadata={sampleData.reviewsMetadata}
          updateFilters={this.updateFilters.bind(this)}/>
      </div>
    );
  }
}
export default Reviews;
