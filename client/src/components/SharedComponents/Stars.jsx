import React from 'react';
import PropTypes from 'prop-types';

const Stars = ({ rating, handleClick, fillColor = '#696969' }) => {
  const roundedRating = Number((Math.round(rating * 4) / 4).toFixed(2));
  return (
    <span
      style={{ cursor: (handleClick ? 'pointer' : 'auto') }}
      onClick={(handleClick ? handleClick : () => { })}>
      {Array(5)
        .fill(0)
        .map((val, idx) => { return idx + 1; })
        .map((starNumber) => {
          var d;
          if (roundedRating >= starNumber) {
            d = 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24z';
          } else if (roundedRating + 0.25 === starNumber) {
            d = 'M 22 9.24 L 14.81 8.62 L 12 2 L 9.19 8.63 L 2 9.24 L 7.46 13.97 L 5.82 21 L 12 17.27 L 18.18 21 L 16.55 13.97 L 22 9.24 Z M 12.248 13.337 L 12 6.1 L 13.71 10.14 L 18.09 10.52 L 14.77 13.4 L 12.248 13.337 Z';
          } else if (roundedRating + 0.5 === starNumber) {
            d = 'M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z';
          } else if (roundedRating + 0.75 === starNumber) {
            d = 'M 22 9.24 L 14.81 8.62 L 12 2 L 9.19 8.63 L 2 9.24 L 7.46 13.97 L 5.82 21 L 12 17.27 L 18.18 21 L 16.55 13.97 L 22 9.24 Z M 12 15.4 L 8.24 17.67 L 9.24 13.39 L 12.005 11.944 L 12 6.1 L 13.71 10.14 L 18.09 10.52 L 14.77 13.4 L 15.77 17.68 L 12 15.4 Z';
          } else {
            d = 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z';
          }
          return (
            <svg
              key={starNumber}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24">
              {/*SVG path source: https://fonts.google.com/icons?selected=Material+Icons&icon.query=star */}
              <path d={d}
                fill={fillColor}
                strokeWidth="0.5"
                stroke={fillColor} />;
            </svg>
          );
        })
      }
    </span>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
  fillColor: PropTypes.string,
};

export default Stars;
