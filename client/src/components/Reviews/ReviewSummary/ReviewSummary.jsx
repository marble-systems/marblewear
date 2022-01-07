import React from 'react';
import PropTypes from 'prop-types';
import AverageRating from './AverageRating/AverageRating.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown.jsx';

// TODO: add tests for AverageRating,
// RatingBreakdown, and ProductBreakdown components

const ReviewSummary = ({ reviewsMetadata, updateFilters }) => {
  let { totalRatings,
    percentageRecommended,
    averageRating,
    ratings,
    characteristics } = reviewsMetadata;
  return (
    <div className="review-summary-container">
      <AverageRating
        ratingsCount={totalRatings}
        averageRating={averageRating} />
      <p>{percentageRecommended}% of reviews recommend this product</p>
      <RatingBreakdown
        starsCount={ratings}
        ratingsCount={totalRatings}
        updateFilters={updateFilters}/>
      <ProductBreakdown
        characteristics={characteristics}/>
    </div>
  );
};

ReviewSummary.propTypes = {
  reviewsMetadata: PropTypes.object,
  updateFilters: PropTypes.func.isRequired
};

export default ReviewSummary;
