import React from 'react';
import sampleImage from './sampleData/cat.png'



function ImageThumbnail ({image}) {
  return (
    <div>
      <img class="imageThumbnail" src={image}/>
    </div>
  )
}

export default ImageThumbnail;