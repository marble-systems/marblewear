import React, { useState } from "react";
import './prodStyles.css';

function ImageGallery ({imageGallery}) {

  const [currentImage, updateMainImage] = useState(imageGallery[0])

  const setThumbnailClass = (image) => {
    return image === currentImage ? "imageThumbnailMain" : "imageThumbnail"
  }
  const enterExpandedView = () => {

  }

  return (
    <div>
      <img class="mainImage" src={currentImage}/>

      {imageGallery.map((image) =>
      <img
        class={setThumbnailClass(image)}
        src={image}
        onClick={(e) => updateMainImage(image)}/>
      )}

    </div>
  )
}

export default ImageGallery;