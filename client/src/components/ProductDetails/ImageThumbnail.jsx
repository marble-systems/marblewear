import React from 'react';
import css from './prodStyles.css';
import sampleImage from './sampleData/cat.png'


//

function ImageThumbnail ({image}) {
  return (
    <div>
      <img class="imageThumbnail" src={image}></img>
    </div>
  )
}

export default ImageThumbnail;