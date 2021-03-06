import React from 'react';
import PropTypes from 'prop-types';

const StarRatingBar = ({ stars, percentage, reviews }) => {
  return (
    <div>
      <span><u>{stars} {stars === 1 ? 'star' : 'stars'}</u></span>
      <div
        style={{
          display: 'inline-block',
          height: '0.5em',
          width: '50%',
          backgroundColor: '#e0e0de',
          margin: 1
        }}>
        <div style={{
          height: '100%',
          width: `${percentage}%`,
          backgroundColor: 'green',
          borderRadius: 'inherit',
          textAlign: 'right'
        }}>
        </div>
      </div>
      <span style={{ fontSize: '0.5em' }}>
        {`${reviews} ${(reviews === 1 ? 'review' : 'reviews')}`}
      </span>
    </div>
  );
};

StarRatingBar.propTypes = {
  stars: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};

export default StarRatingBar;
