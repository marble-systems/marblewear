/* eslint-disable react/prop-types */
import React from 'react';
import './prodStyles.css';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import DropDownsAndButtons from './DropDownsAndButtons.jsx';
import SloganDescription from './SloganDescription.jsx';


function ProductOverview ({currentProduct, productStylesArray, currentStyleID, changeCurrentStyle}) {
  return (
    <div>
      <div className="d-flex flex-row" >
        <div className="flex-column" style={{width: '50em', margin: '1em', position: 'relative'}}>
          <h3>PRODUCT OVERVIEW</h3>
          <ImageGallery
            productStylesArray={productStylesArray}
            currentStyleID={currentStyleID}/>
        </div>

        <div className="d-flex flex-column" style={{width: '30em', margin: '1em', position: 'relative'}}>
          <StyleSelector
            productStylesArray={productStylesArray}
            currentStyleID={currentStyleID}
            changeCurrentStyle={changeCurrentStyle}/>
          <DropDownsAndButtons
            productStylesArray={productStylesArray}
            currentStyleID={currentStyleID}/>
        </div>
      </div>

      <div className="d-flex flex-row" style={{width: '50em', margin: '1em', position: 'relative'}}>
        <div>
          <SloganDescription
            currentProduct={currentProduct}/>
        </div>
      </div>

    </div>
  );
}

export default ProductOverview;



