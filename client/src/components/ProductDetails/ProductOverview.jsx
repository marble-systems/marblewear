import React from 'react';
import PropTypes from 'prop-types';
import './prodStyles.css';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import DropDownsAndButtons from './DropDownsAndButtons.jsx';
import SloganDescription from './SloganDescription.jsx';
import Features from './Features.jsx';

// props
// currentProduct
// productStylesArray
// changeCurrentStyle

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyleID: 234004,
      currentStyleObject: [],
      imageGallery: [],
      currentImage: this.state.imageGallery[0],
      currentMainImageIndex: 0,

    };

    this.updateMainImage = this.updateMainImage.bind(this);
    this.updateMainImageIndex = this.updateMainImageIndex.bind(this);
    this.changeCurrentStyle = this.changeCurrentStyle.bind(this);
  }

  componentDidMount(){

    const currentStyleObj = this.getCurrentStyleObject(this.state.currentStyleID, this.state.productStylesArray);
    this.setState({ currentStyleObject: currentStyleObj });

    const imageGallery = this.state.currentStyleObject[0].photos.map((photo)=> photo.thumbnail_url);

    this.setState({ imageGallery: imageGallery });



  }

  updateImageGallery(newStyleObj) {
    this.setState({ currentStyleObject: newStyleObj });
  }

  updateMainImage(newImage) {
    this.setState({ currentImage: newImage });
  }
  updateMainImageIndex(newIndex) {
    this.setState({ updateMainImageIndex: newIndex });
  }
  changeCurrentStyle(id) {
    const currentStyleObj = this.getCurrentStyleObject(this.state.currentStyleID, this.state.productStylesArray);
    this.setState({ currentStyleObject: currentStyleObj });
    this.setState({ currentStyleID: id });
  }
  getCurrentStyleObject (targetStyleId, productStylesArray) {return productStylesArray.filter((style) => style.style_id === targetStyleId);
  }





  render() {

    let {currentProduct, productStylesArray} = this.props;
    let {currentStyleID, currentImage, imageGallery, currentMainImageIndex } = this.state;

    return (
      <div>

        <div className="d-flex flex-row" >

          <div className="flex-column" style={{width: '50em', margin: '1em', position: 'relative'}}>


            <ImageGallery
              currentMainImageIndex={currentMainImageIndex}
              imageGallery={imageGallery}
              currentImage={currentImage}
              productStylesArray={productStylesArray}
              currentStyleID={currentStyleID}/>
          </div>

          <div className="d-flex flex-column" style={{width: '30em', margin: '1em', position: 'relative'}}>
            <h4>Read All Reviews ***</h4>
            <StyleSelector
              productStylesArray={productStylesArray}
              currentStyleID={currentStyleID}
              updateMainImage={this.updateMainImage}
              updateMainImageIndex={this.updateMainImageIndex}
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



