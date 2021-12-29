import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../../SharedComponents/Stars.jsx';

const AverageRating = ({ ratingsCount, averageRating }) => {
  return (
    <div>
      <span>
        <span style={{fontSize: '2em'}}>{averageRating.toFixed(1)}</span>
        <Stars rating={averageRating}/>
        <span style={{fontSize: '0.5em'}}>{`(${ratingsCount} reviews total)`}</span>
      </span>

    </div>
  );
};

AverageRating.propTypes = {
  ratingsCount: PropTypes.number,
  averageRating: PropTypes.number
};

export default AverageRating;
