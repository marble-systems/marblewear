import React from 'react';

function StyleThumbnail ({image, style}) {
  return (
    <div  >
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

