import React from 'react';
import PropTypes from 'prop-types';
import AverageRating from './AverageRating.jsx';

// TODO: add tests for AverageRating component

const ReviewSummary = ({ reviewsMetadata }) => {
  const ratings = reviewsMetadata.ratings || {};
  const totalRatings = Object.values(ratings)
    .reduce((prev, curr) => { return prev + Number(curr); }, 0);
  const averageRating = totalRatings === 0 ? 0 : (Object.keys(ratings)
    .reduce((prev, key) => {
      let rating = Number(key);
      let ratingCount = Number(ratings[key]);
      return rating * ratingCount + prev;
    }, 0) / totalRatings);
  const recommendedCount = reviewsMetadata.recommended.true || 0;
  const percentageRecommended = Math.floor(recommendedCount / totalRatings * 100);
  return (
    <div>
      <AverageRating
        ratingsCount={totalRatings}
        averageRating={averageRating} />
      <p>{percentageRecommended}% of reviews recommend this product</p>
    </div>
  );
};

ReviewSummary.propTypes = {
  reviewsMetadata: PropTypes.object
};

export default ReviewSummary;
