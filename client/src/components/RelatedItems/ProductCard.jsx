import React from 'react';

function ProductCard({relatedProductInfo}) {
  return (
    <div>
      <p>--- Image ---</p>
      <p>--- Action Button ---</p>
      <p>{relatedProductInfo.category}</p>
      <h4>{relatedProductInfo.name}</h4>
      <p>{relatedProductInfo['default_price']}</p>
      <p>*** Star Ratings ***</p>
    </div>
  )
}

export default ProductCard;