/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './prodStyles.css';

function ImageGallery ({productStylesArray, currentStyleID}) {

  const getCurrentStyleObject = (targetStyleId, productStylesArray) => {return productStylesArray.filter((style) => style.style_id === targetStyleId);
  };

  const currentStyleObject = getCurrentStyleObject(currentStyleID, productStylesArray);

  const imageGallery = currentStyleObject[0].photos.map((photo)=> photo.thumbnail_url);

  const [currentImage, updateMainImage] = useState(imageGallery[0]);
  //test
  const [currentMainImageIndex, updateMainImageIndex] = useState(0);


  const setThumbnailClass = (image) => {
    return image === currentImage ? 'imageThumbnailMain' : 'imageThumbnail';
  };


  const showNextImage = ()=>{
    if(currentMainImageIndex !== imageGallery.length-1) {
      updateMainImageIndex(currentMainImageIndex+1);
      const newImg = imageGallery.filter((image)=> imageGallery.indexOf(image) === currentMainImageIndex+1);
      updateMainImage(newImg);
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
    <div clasName="container">
      <img
        className="mainImage carousel slide"
        data-ride="carousel"
        src={currentImage}
        onClick= { () => {showNextImage();} }
      />



      {imageGallery.map((image) =>
        // eslint-disable-next-line react/jsx-key
        <div clasName="row">
          <img
            className={setThumbnailClass(image)}
            src={image}
            onClick={() => {
              let indx = imageGallery.indexOf(image);
              updateMainImageIndex(indx);
              updateMainImage(image);}
            }/>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;