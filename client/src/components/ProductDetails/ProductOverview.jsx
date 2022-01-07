import React from 'react';
import PropTypes from 'prop-types';
import './prodStyles.css';

import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import DropDownsAndButtons from './DropDownsAndButtons.jsx';
import SloganDescription from './SloganDescription.jsx';
import Features from './Features.jsx';


function ProductOverview ({currentProduct, productStylesArray, currentStyleID, changeCurrentStyle, updateMainImage, mainImage}) {
  return (
    <div>

      <div className="d-flex flex-row" >

        <div className="flex-column" style={{width: '50em', margin: '1em', position: 'relative'}}>
          <ImageGallery
            productStylesArray={productStylesArray}
            currentStyleID={currentStyleID}
            mainImage={mainImage}
            updateMainImage={updateMainImage}/>
        </div>

        <div className="d-flex flex-column" style={{width: '30em', margin: '1em', position: 'relative'}}>
          <h4>Read All Reviews ***</h4>
          <StyleSelector
            productStylesArray={productStylesArray}
            currentStyleID={currentStyleID}
            currentProduct={currentProduct}
            changeCurrentStyle={changeCurrentStyle}
            updateMainImage={updateMainImage}/>
          <DropDownsAndButtons
            productStylesArray={productStylesArray}
            currentStyleID={currentStyleID}/>
        </div>

      </div>


      <div className="d-flex flex-row">

        <div className="flex-column" style={{width: '50em', margin: '1em', position: 'relative'}}>
          <SloganDescription
            currentProduct={currentProduct}/>
        </div>

        <div className="d-flex flex-column" style={{width: '30em', margin: '1em', position: 'relative'}}>
          <Features
            currentProduct={currentProduct}/>
        </div>

      </div>

    </div>
  );
}

ProductOverview.propTypes = {
  productStylesArray: PropTypes.array.isRequired,
  currentStyleID: PropTypes.number.isRequired,
  currentProduct: PropTypes.object.isRequired,
  changeCurrentStyle: PropTypes.func,
  updateMainImage: PropTypes.func.isRequired,
  mainImage: PropTypes.string.isRequired,
};

export default ProductOverview;



