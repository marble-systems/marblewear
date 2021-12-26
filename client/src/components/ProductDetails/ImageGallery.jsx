import React from 'react';
import css from './prodStyles.css';
import ImageThumbnail from './ImageThumbnail.jsx'

//clicking thumbnail will set it to main & highlight thumbnail on side bar

function ImageGallery ({images}) {
  return (
    <div>
      <img class="mainImage" src={images[0]}/>

      <img class="imageThumbnail" src={images[1]}/>
      <img class="imageThumbnail" src={images[2]}/>
      <img class="imageThumbnail" src={images[3]}/>
    </div>
  )
}

export default ImageGallery;