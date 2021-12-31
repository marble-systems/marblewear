/* eslint-disable react/prop-types */
import React from 'react';
import './prodStyles.css';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import DropDownsAndButtons from './DropDownsAndButtons.jsx';
import SloganDescription from './SloganDescription.jsx';


function ProductOverview ({productList, currentProductID, currentStyleID, changeCurrentStyle}) {
  return (
    <div>
      <h3>PRODUCT OVERVIEW</h3>

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
      <SloganDescription
        productList={productList}/>



    </div>
  );
}

export default ProductOverview;



