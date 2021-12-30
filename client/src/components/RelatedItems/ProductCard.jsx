import React from 'react';

function ProductCard({relatedProductInfo}) {
  return (
    <div class='card' style={{width: '20em'}}>
      <img class="card-img-top" src="..." alt="Card image"></img>
      <p>--- Action Button ---</p>
      <div class="card-body">
        <p class="card-text">{relatedProductInfo.category}</p>
        <h5 class="card-title">{relatedProductInfo.name}</h5>
        <p class="card-text">{relatedProductInfo.default_price}</p>
        <p>*** Star Ratings ***</p>
      </div>
    </div>
  )
}

export default ProductCard;