import React, { useState } from 'react';
import './prodStyles.css';


function StyleSelector ({styles, currentStyleID, changeCurrentStyle}) {

  return (
    <div>
      <h4>Current Style -> {currentStyleID}</h4>

      {styles[0]['results'].map((style) =>
            <div>
            Style: {`${style.name}, ${style.style_id}`}
            <img
              class="styleThumbnail"
              src={style.photos[0]['thumbnail_url']}
              onClick={(e) => {changeCurrentStyle(style.style_id)}}
            />
          </div>
      )}
    </div>
  )
}

export default StyleSelector;