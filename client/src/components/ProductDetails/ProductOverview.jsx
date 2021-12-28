import React from 'react';
import './prodStyles.css';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import DropDownsAndButtons from './DropDownsAndButtons.jsx';


function ProductOverview ({productList, currentProductID, currentStyleID, changeCurrentStyle}) {
  return (
    <div>
      <h2>__________START OF PRODUCT OVERVIEW__________</h2>

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
         styles={productList.productStyles}
         currentStyleID={currentStyleID}
         currentProductID={currentProductID}/>


      <h3>__________Slogan, Description__________</h3>

      <h5>{productList.productToDisplay.slogan}</h5>
      <h5>{productList.productToDisplay.description}</h5>
      <h3>___________________________________</h3>

      <h2>__________END OF PRODUCT OVERVIEW__________</h2>

    </div>
  )
}

export default ProductOverview;



