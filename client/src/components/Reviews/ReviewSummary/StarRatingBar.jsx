import React from 'react';
import PropTypes from 'prop-types';

const PercentageOfStars = ({ stars, percentage, reviews, handleClick }) => {
  return (
    <div
      onClick={() => { handleClick(stars); }}
      style={{cursor: 'pointer'}}
      //TODO: update background color on hover
      onMouseOver={() => {}}
      onMouseOut={() => {}}>
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

PercentageOfStars.propTypes = {
  stars: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  handleClick: PropTypes.func
};

export default PercentageOfStars;
