import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({relatedProductInfo}) {
  return (
    <div className="card" style={{width: '20em'}}>
      <img className="card-img-top" src="..." alt="Card image"></img>
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