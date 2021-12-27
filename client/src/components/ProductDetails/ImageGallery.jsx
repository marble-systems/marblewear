import React from 'react';
import './prodStyles.css';
import ImageThumbnail from './ImageThumbnail.jsx'

//clicking thumbnail will set it to main & highlight thumbnail on side bar

function ImageGallery ({images}) {
  return (
    <div>
      <img class="mainImage" src={images[0]}/>
      {images.map((image) =>
        <ImageThumbnail image={image}/>
      )}
    </div>
  )
}

export default ImageGallery;