const utilityFns = {
  processReviewMetadata: (reviewsMetadata) => {
    const ratings = reviewsMetadata.ratings || {};
    const totalRatings = Object.values(ratings)
      .reduce((prev, curr) => { return prev + Number(curr); }, 0);
    const averageRating = totalRatings === 0 ? 0 : (Object.keys(ratings)
      .reduce((prev, key) => {
        let rating = Number(key);
        let ratingCount = Number(ratings[key]);
        return rating * ratingCount + prev;
      }, 0) / totalRatings);
    const characteristics = reviewsMetadata.characteristics;
    const recommendedCount = reviewsMetadata.recommended.true || 0;
    const percentageRecommended = Math.floor(recommendedCount / totalRatings * 100);
    return { totalRatings, averageRating, recommendedCount, percentageRecommended, ratings, characteristics };
  },
  generateUrlParams: (object) => {
    return Object.keys(object)
      .map(key => `${key}=${object[key]}`)
      .join('&');
  }
};

export default utilityFns;
