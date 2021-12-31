/* eslint-disable react/prop-types */
import React from 'react';
import './prodStyles.css';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import DropDownsAndButtons from './DropDownsAndButtons.jsx';


function ProductOverview ({productList, currentProductID, currentStyleID, changeCurrentStyle}) {
  return (
    <div>
      <h2>PRODUCT OVERVIEW</h2>

      <ImageGallery
        styles={productList.productStyles}
        currentProductID={currentProductID}
        currentStyleID={currentStyleID}
      />

      <StyleSelector
        styles={productList.productStyles}
        currentStyleID={currentStyleID}
        currentProductID={currentProductID}
        changeCurrentStyle={changeCurrentStyle}
      />
      <DropDownsAndButtons
        productStyles={productList.productStyles}
        currentStyleID={currentStyleID}
        currentProductID={currentProductID}/>

      <h5>{productList.productToDisplay.slogan}</h5>
      <h5>{productList.productToDisplay.description}</h5>


    </div>
  );
}

export default ProductOverview;



