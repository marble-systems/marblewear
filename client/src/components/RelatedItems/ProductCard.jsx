import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton.jsx';
import noImageAvailable from './noImageAvailable.jpeg';
import Stars from '../SharedComponents/Stars.jsx';
import utilityFns from '../../utilityFns.js';

function ProductCard({relatedProductInfo}) {
  const imageSource = relatedProductInfo.style.photos[0].url ? relatedProductInfo.style.photos[0].url : noImageAvailable;
  const productprice = Number(relatedProductInfo.default_price);
  let {averageRating} = utilityFns.processReviewMetadata(relatedProductInfo);
  return (
    <div className="card border-dark" style={{width: '20em', margin: '1em', position: 'relative'}}>
      <img className="card-img-top" src={imageSource} style={{width: 'auto', height: '20vw', objectFit: 'cover'}} alt="Product image"></img>
      <ActionButton productCardSetType={'RelatedProducts'}/>
      <div className="card-body">
        <p className="card-text"><small className="text-muted">{relatedProductInfo.category.toUpperCase()}</small></p>
        <h5 className="card-title">{relatedProductInfo.name}</h5>
        <p className="card-text"><small className="text-muted">${productprice}</small></p>
        <Stars rating={averageRating}/>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  relatedProductInfo: PropTypes.object
};

export default ProductCard;