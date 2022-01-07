import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ImageGallery ({productStylesArray, currentStyleID, mainImage, updateMainImage}) {

  const getCurrentStyleObject = (targetStyleId, productStylesArray) => {return productStylesArray.filter((style) => style.style_id === targetStyleId);
  };

  const currentStyleObject = getCurrentStyleObject(currentStyleID, productStylesArray);

  const imageGallery = currentStyleObject[0].photos.map((photo)=> photo.thumbnail_url);


  const [currentMainImageIndex, updateMainImageIndex] = useState(0);

  if (mainImage === '') mainImage = imageGallery[0];

  const setThumbnailClass = (image) => {
    return image === mainImage ? 'imageThumbnailMain' : 'imageThumbnail';
  };

  const showNextImage = ()=>{
    if(currentMainImageIndex !== imageGallery.length-1) {
      updateMainImageIndex(currentMainImageIndex+1);
      const newImg = imageGallery.filter((image)=> imageGallery.indexOf(image) === currentMainImageIndex+1);
      updateMainImage(newImg[0]);
    }
  };

  const showPreviousImage = ()=>{
    if(currentMainImageIndex > 0) {
      updateMainImageIndex(currentMainImageIndex-1);
      const newImg = imageGallery.filter((image)=> imageGallery.indexOf(image) === currentMainImageIndex-1);
      updateMainImage(newImg);

    }
  };


  return (
    <div className="container">

      <div className="main-image-container">
        <img  className="mainImage" src={mainImage} />
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

      {imageGallery.map((image, idx) =>
        <div className="row" key={idx}>
          <img
            className={setThumbnailClass(image)}
            src={image}
            onClick={() => {
              let indx = imageGallery.indexOf(image);
              updateMainImageIndex(indx);
              updateMainImage(image);
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

ImageGallery.propTypes = {
  productStylesArray: PropTypes.array.isRequired,
  currentStyleID: PropTypes.number.isRequired,
  mainImage: PropTypes.string.isRequired,
  updateMainImage: PropTypes.func.isRequired
};

export default ImageGallery;