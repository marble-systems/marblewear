/* eslint-disable react/prop-types */
import React from 'react';
import './prodStyles.css';

function SloganDescription ({productList}) {

  return (
    <div>
      <h5>{productList.productToDisplay.slogan}</h5>
      <h5>{productList.productToDisplay.description}</h5>
    </div>
  );
}

export default SloganDescription;