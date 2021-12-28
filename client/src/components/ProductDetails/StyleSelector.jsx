import React, { useState } from 'react';
import './prodStyles.css';


function StyleSelector ({styles}) {


  return (
    <div>
      <h4>Current Style -> {styles[0]['results'][0]['style_id']}</h4>
      {styles[0]['results'].map((style) =>
            <div>
            Style: {`${style.name}, ${style.style_id}`}
            <img
              class="styleThumbnail"
              src={style.photos[0]['thumbnail_url']}
              onClick={(e) => alert(`Change the state of currentStyle to ID: ${style.style_id}`)}
            />
          </div>
      )}
    </div>
  )
}

export default StyleSelector;