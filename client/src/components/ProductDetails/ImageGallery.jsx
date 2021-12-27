import React, { useState } from "react";
import './prodStyles.css';

//clicking thumbnail will set it to main & highlight thumbnail on side bar

function ImageGallery ({imageGallery}) {

  const [currentImage, setStyle2] = useState(imageGallery[0])
  const updateMainImage = (image) => {
      setStyle2(image)
  }

  return (
    <div>
      <img class="mainImage" src={currentImage}/>
      {imageGallery.map((image) =>
      <img
        class={"imageThumbnail"}
        src={image}
        onClick={(e) => {
          updateMainImage(image)
        }}/>

      )}
    </div>
  )
}

export default ImageGallery;