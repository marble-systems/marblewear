import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton.jsx';
import noImageAvailable from './noImageAvailable.jpeg';

function ProductCard({relatedProductInfo}) {
  const imageSource = relatedProductInfo.style.photos[0].url ? relatedProductInfo.style.photos[0].url : noImageAvailable;
  const productprice = Number(relatedProductInfo.default_price);
  return (
    <div className="card border-dark" style={{width: '20em', margin: '1em'}}>
      <img className="card-img-top" src={imageSource} style={{width: 'auto', height: '20vw', objectFit: 'cover'}} alt="Product image"></img>
      <ActionButton productCardSetType={'RelatedProducts'}/>
      <div className="card-body">
        <p className="card-text"><small className="text-muted">{relatedProductInfo.category.toUpperCase()}</small></p>
        <h5 className="card-title">{relatedProductInfo.name}</h5>
        <p className="card-text"><small className="text-muted">${productprice}</small></p>
        <p>*** Star Ratings ***</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  relatedProductInfo: PropTypes.object
};

export default ProductCard;