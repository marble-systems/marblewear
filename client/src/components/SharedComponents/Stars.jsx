import React from 'react';
import PropTypes from 'prop-types';

const Stars = ({ rating, handleClick, fillColor='#696969' }) => {
  const roundedRating = Number((Math.round(rating * 4) / 4).toFixed(2));
  return (
    <span
      style={{ cursor: (handleClick ? 'pointer' : 'auto') }}
      onClick={(handleClick ? handleClick : () => { })}>
      {Array(5)
        .fill(0)
        .map((val, idx) => { return idx + 1; })
        .map((starNumber) => {
          var percentageFull;
          if (roundedRating >= starNumber) {
            percentageFull = 100;
          } else if (roundedRating + 0.25 === starNumber) {
            percentageFull = 75;
          } else if (roundedRating + 0.5 === starNumber) {
            percentageFull = 50;
          } else if (roundedRating + 0.75 === starNumber) {
            percentageFull = 25;
          } else {
            percentageFull = 0;
          }
          return (
            <svg
              key={starNumber}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24">
              <defs>
                <linearGradient id={`half_grad${starNumber}`}>
                  <stop offset={percentageFull + '%'} stopColor={fillColor} />
                  <stop offset={percentageFull + '%'} stopColor={fillColor} stopOpacity="0" />
                </linearGradient>
              </defs>
              {/*SVG path source: https://fonts.google.com/icons?selected=Material+Icons&icon.query=star */}
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill={`url(#half_grad${starNumber})`}
                strokeWidth="1"
                stroke={fillColor} />;
            </svg>
          );
        })
      }
    </span>
  );
};

Stars.propTypes = {
  rating: PropTypes.number,
  handleClick: PropTypes.func,
  fillColor: PropTypes.string,
};

export default Stars;
