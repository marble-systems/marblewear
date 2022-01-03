/* eslint-disable react/prop-types */
import React from 'react';
import './prodStyles.css';

function SloganDescription ({currentProduct}) {

  return (
    <div>
      <h5>{currentProduct.slogan}</h5>
      <h5>{currentProduct.description}</h5>
    </div>
  );
}

export default SloganDescription;