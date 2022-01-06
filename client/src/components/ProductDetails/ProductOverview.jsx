import React from 'react';
import PropTypes from 'prop-types';
import './prodStyles.css';

import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import DropDownsAndButtons from './DropDownsAndButtons.jsx';
import SloganDescription from './SloganDescription.jsx';
import Features from './Features.jsx';


class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyleID: 234004
    };

    this.changeCurrentStyle = this.changeCurrentStyle.bind(this);
  }



  changeCurrentStyle(id) {
    this.setState({ currentStyleID: id });
  }

  render() {

    let {currentProduct, productStylesArray} = this.props;
    let {currentStyleID } = this.state;

    return (
      <div>

        <div className="d-flex flex-row" >

          <div className="flex-column" style={{width: '50em', margin: '1em', position: 'relative'}}>
            <ImageGallery
              productStylesArray={productStylesArray}
              currentStyleID={currentStyleID}/>
          </div>

          <div className="d-flex flex-column" style={{width: '30em', margin: '1em', position: 'relative'}}>
            <h4>Read All Reviews ***</h4>
            <StyleSelector
              productStylesArray={productStylesArray}
              currentStyleID={currentStyleID}
              changeCurrentStyle={this.changeCurrentStyle}
              currentProduct={currentProduct}/>
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
}

ProductOverview.propTypes = {
  productStylesArray: PropTypes.array.isRequired,
  currentProduct: PropTypes.object.isRequired,
};

export default ProductOverview;



