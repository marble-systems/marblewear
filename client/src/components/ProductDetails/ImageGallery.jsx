/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './prodStyles.css';

function ImageGallery ({productStylesArray, currentStyleID}) {

  const getCurrentStyleObject = (targetStyleId, productStylesArray) => {return productStylesArray.filter((style) => style.style_id === targetStyleId);
  };

  const currentStyleObject = getCurrentStyleObject(currentStyleID, productStylesArray);

  const imageGallery = currentStyleObject[0].photos.map((photo)=> photo.thumbnail_url);

  const [currentImage, updateMainImage] = useState(imageGallery[0]);

  const setThumbnailClass = (image) => {
    return image === currentImage ? 'imageThumbnailMain' : 'imageThumbnail';
  };


  return (
    <div clasName="container">
      <img className="mainImage" src={currentImage}/>
      {imageGallery.map((image) =>
        // eslint-disable-next-line react/jsx-key
        <div clasName="row">
          <img
            className={setThumbnailClass(image)}
            src={image}
            onClick={() => updateMainImage(image)}/>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;