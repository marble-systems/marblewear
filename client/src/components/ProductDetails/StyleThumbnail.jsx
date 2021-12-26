import React from 'react';


//props.. aka style is an object, an individual style
function StyleThumbnail ({image, style}) {
  return (
    <div class="styleThumbnails" >
      Style #: {style.style_id}
      <img
        class="styleThumbnail"
        src={image}
        onClick={(e) => alert(`Change the state of currentStyle to ID: ${style.style_id}`)}
      />
    </div>
  )
}

export default StyleThumbnail;

