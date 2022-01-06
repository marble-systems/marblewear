import React from 'react';
// import PropTypes from 'prop-types';
// ImageGallery.propTypes = {
//   productStylesArray: PropTypes.array.isRequired,
//   currentStyleID: PropTypes.number.isRequired
// };



function ImageGallery ({currentMainImageIndex, currentImage,productStylesArray, currentStyleID}) {

  const getCurrentStyleObject = (targetStyleId, productStylesArray) => {return productStylesArray.filter((style) => style.style_id === targetStyleId);
  };

  const currentStyleObject = getCurrentStyleObject(currentStyleID, productStylesArray);

  const imageGallery = currentStyleObject[0].photos.map((photo)=> photo.thumbnail_url);


  // const [currentImage, updateMainImage] = useState(imageGallery[0]);

  // const [currentMainImageIndex, updateMainImageIndex] = useState(0);

  const setThumbnailClass = (image) => {
    return image === currentImage ? 'imageThumbnailMain' : 'imageThumbnail';
  };

  const showNextImage = ()=>{
    if(currentMainImageIndex !== imageGallery.length-1) {
      this.props.updateMainImageIndex(currentMainImageIndex+1);
      const newImg = this.props.imageGallery.filter((image)=> this.props.imageGallery.indexOf(image) === currentMainImageIndex+1);
      this.props.updateMainImage(newImg);
    }
  };

  const showPreviousImage = ()=>{
    if(currentMainImageIndex > 0) {
      this.props.updateMainImageIndex(currentMainImageIndex-1);
      const newImg = this.props.imageGallery.filter((image)=> this.props.imageGallery.indexOf(image) === currentMainImageIndex-1);
      this.props.updateMainImage(newImg);
    }
  };


  return (
    <div className="container">

      <div className="main-image-container">
        <img  className="mainImage" src={currentImage} />
        <input
          type="image"
          className="previousButton"
          src="https://img.icons8.com/ios-glyphs/50/000000/long-arrow-left.png"
          onClick= { () => showPreviousImage()}/>
        <input
          type="image"
          className="nextButton"
          src="https://img.icons8.com/ios-glyphs/50/000000/long-arrow-right.png"
          onClick= { () => showNextImage() }/>
      </div>

      {this.props.imageGallery.map((image, idx) =>
        <div className="row" key={idx}>
          <img
            className={setThumbnailClass(image)}
            src={image}
            onClick={() => {
              let indx = this.props.imageGallery.indexOf(image);
              this.props.updateMainImageIndex(indx);
              this.props.updateMainImage(image);
            }
            }/>

        </div>
      )}
      <input
        type="image"
        src="https://img.icons8.com/material-rounded/24/000000/chevron-down.png"
        onClick= { () => showNextImage() }/>
    </div>
  );
}



export default ImageGallery;