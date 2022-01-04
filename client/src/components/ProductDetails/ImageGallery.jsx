/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './prodStyles.css';

function ImageGallery ({productStylesArray, currentStyleID}) {

  const getCurrentStyleObject = (targetStyleId, productStylesArray) => {return productStylesArray.filter((style) => style.style_id === targetStyleId);
  };

  const currentStyleObject = getCurrentStyleObject(currentStyleID, productStylesArray);

  const imageGallery = currentStyleObject[0].photos.map((photo)=> photo.thumbnail_url);

  const [currentImage, updateMainImage] = useState(imageGallery[0]);

  const [currentMainImageIndex, updateMainImageIndex] = useState(0);

  const setThumbnailClass = (image) => {
    return image === currentImage ? 'imageThumbnailMain' : 'imageThumbnail';
  };


  const showNextImage = ()=>{
    if(currentMainImageIndex !== imageGallery.length-1) {
      updateMainImageIndex(currentMainImageIndex+1);
      const newImg = imageGallery.filter((image)=> imageGallery.indexOf(image) === currentMainImageIndex+1);
      updateMainImage(newImg);
      // setThumbnailClass(imageGallery.indexOf(currentMainImageIndex+1));
    }
  };

  const showPreviousImage = ()=>{
    if(currentMainImageIndex > 0) {
      updateMainImageIndex(currentMainImageIndex-1);
      const newImg = imageGallery.filter((image)=> imageGallery.indexOf(image) === currentMainImageIndex-1);
      updateMainImage(newImg);
      // setThumbnailClass(imageGallery.indexOf(currentMainImageIndex-1));
    }
  };


  return (
    <div className="container main-image-container">
      <img className="mainImage" src={currentImage} />
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


      {imageGallery.map((image) =>
        // eslint-disable-next-line react/jsx-key
        <div className="row">
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

export default ImageGallery;