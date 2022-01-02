import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry/ReviewListEntry.jsx';

class ReviewList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    let { reviews } = this.props;
    return (
      <div style={{flexDirection: 'column', margin: '10px'}}>
        {reviews.map(review => {
          return (
            <ReviewListEntry key={review.review_id} review={review}/>
          );
        })}
      </div>

    );
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.array
};

export default ReviewList;
