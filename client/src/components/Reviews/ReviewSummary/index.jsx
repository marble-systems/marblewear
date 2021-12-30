import React from 'react';
import PropTypes from 'prop-types';
import AverageRating from './AverageRating.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

const ReviewSummary = ({ reviewsMetadata, updateFilters }) => {
  const ratings = reviewsMetadata.ratings || {};
  const ratingsCount = Object.values(ratings)
    .reduce((prev, curr) => { return prev + parseInt(curr); }, 0);
  const averageRating = ratingsCount === 0 ? 0 : (Object.keys(ratings)
    .reduce((prev, key) => { return parseInt(key) * parseInt(ratings[key]) + prev; }, 0)
    / ratingsCount);
  const recommendedCount = reviewsMetadata.recommended.true || 0;
  const percentageRecommended = Math.floor(recommendedCount / ratingsCount * 100);
  return (
    <div style={{width: '5 em'}}>
      <AverageRating
        ratingsCount={ratingsCount}
        averageRating={averageRating} />
      <p>{percentageRecommended}% of reviews recommend this product</p>
      <RatingBreakdown
        starsCount={reviewsMetadata.ratings}
        ratingsCount={ratingsCount}
        updateFilters={updateFilters}/>
    </div>
  );
};

ReviewSummary.propTypes = {
  reviewsMetadata: PropTypes.object,
  updateFilters: PropTypes.func.isRequired
};

export default ReviewSummary;
