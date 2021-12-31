import React from 'react';
import PropTypes from 'prop-types';
import AverageRating from './AverageRating.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import sharedFns from '../../SharedComponents/sharedFns.js';

// TODO: add tests for AverageRating,
// RatingBreakdown, and ProductBreakdown components

const ReviewSummary = ({ reviewsMetadata, updateFilters }) => {
  let { totalRatings, percentageRecommended, averageRating } = sharedFns.calculateAverageRating(reviewsMetadata);
  return (
    <div style={{width: '5 em'}}>
      <AverageRating
        ratingsCount={totalRatings}
        averageRating={averageRating} />
      <p>{percentageRecommended}% of reviews recommend this product</p>
      <RatingBreakdown
        starsCount={reviewsMetadata.ratings}
        ratingsCount={totalRatings}
        updateFilters={updateFilters}/>
      <ProductBreakdown
        characteristics={reviewsMetadata.characteristics}/>
    </div>
  );
};

ReviewSummary.propTypes = {
  reviewsMetadata: PropTypes.object,
  updateFilters: PropTypes.func.isRequired
};

export default ReviewSummary;
