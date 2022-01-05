import React from 'react';
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
    let { reviewsData, currentProductID } = this.props;
    let { reviewsMetadata, reviews } = reviewsData;
    return (
      <div>
        <h3>RATINGS &#38; REVIEWS</h3>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <ReviewSummary
            reviewsMetadata={reviewsMetadata}
            updateFilters={this.updateFilters.bind(this)}/>
          <ReviewList
            productName={'Adidas Sneakers'}
            starFilter={starFilter}
            reviews={reviews.results} />
        </div>
      </div>
    );
  }
}



export default Reviews;
