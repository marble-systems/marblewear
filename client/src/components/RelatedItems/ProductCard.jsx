import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton.jsx';
import noImageAvailable from './noImageAvailable.jpeg';
import Stars from '../SharedComponents/Stars.jsx';
import utilityFns from '../../utilityFns.js';

function ProductCard({relatedProductInfo}) {
  let {currentProduct,
    productStylesArray,
    reviews} = relatedProductInfo;
  const imageSource = productStylesArray[0].photos[0].url ? productStylesArray[0].photos[0].url : noImageAvailable;
  const productprice = Number(currentProduct.default_price);
  let {averageRating} = utilityFns.processReviewMetadata(reviews.reviewsMetadata);
  return (
    <div className="card border-dark" style={{width: '20em', margin: '1em', position: 'relative'}}>
      <img className="card-img-top" src={imageSource} style={{width: 'auto', height: '20vw', objectFit: 'cover'}} alt="Product image"></img>
      <ActionButton productCardSetType={'RelatedProducts'}/>
      <div className="card-body">
        <p className="card-text"><small className="text-muted">{currentProduct.category.toUpperCase()}</small></p>
        <h5 className="card-title">{currentProduct.name}</h5>
        <p className="card-text"><small className="text-muted">${productprice}</small></p>
        <Stars rating={averageRating}/>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  relatedProductInfo: PropTypes.object,
  currentProduct: PropTypes.object,
  productStylesArray: PropTypes.array,
  reviews: PropTypes.object,
};

export default ProductCard;