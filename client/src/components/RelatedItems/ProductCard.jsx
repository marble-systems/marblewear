import React from 'react';
import PropTypes from 'prop-types';
import noImageAvailable from './noImageAvailable.jpeg';

function ProductCard({relatedProductInfo}) {
  const imageSource = relatedProductInfo.style.photos[0].url ? relatedProductInfo.style.photos[0].url : noImageAvailable;
  return (
    <div className="card border-dark" style={{width: '20em', margin: '1em'}}>
      <img className="card-img-top" src={imageSource} style={{width: 'auto', height: '20vw', objectFit: 'cover'}} alt="Product image"></img>
      <p>--- Action Button ---</p>
      <div className="card-body">
        <p className="card-text">{relatedProductInfo.category}</p>
        <h5 className="card-title">{relatedProductInfo.name}</h5>
        <p className="card-text">{relatedProductInfo.default_price}</p>
        <p>*** Star Ratings ***</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  relatedProductInfo: PropTypes.object
};

export default ProductCard;