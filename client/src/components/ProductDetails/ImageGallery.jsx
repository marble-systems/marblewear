import React from 'react';
import './prodStyles.css';

//clicking thumbnail will set it to main & highlight thumbnail on side bar

function ImageGallery ({imageGallery, currentMainImage, updateCurrentImage}) {

  return (
    <div>
      <img class="mainImage" src={currentMainImage}/>
      {imageGallery.map((image) =>
      <img
        class="imageThumbnail"
        src={image}
        onClick={(e)=>updateCurrentImage(image)}/>

      )}
    </div>
  )
}

export default ImageGallery;