import React from 'react';
import ReviewSummary from './ReviewSummary/index.jsx';
import sampleData from './reviewsData.js';

class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h3>RATINGS &#38; REVIEWS</h3>
        <ReviewSummary reviewsMetadata={sampleData.reviewsMetadata}/>
      </div>
    );
  }
}
export default Reviews;
