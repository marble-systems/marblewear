import React from 'react';
import StyleThumbnail from './StyleThumbnail.jsx'


function StyleSelector ({sampleImg, styles}) {
  return (
    <div>
      <h4>Current Style -> {styles[0]['name']}</h4>

      {styles.map((style) =>
        <StyleThumbnail
          style={style}
          image={sampleImg}/>
      )}

    </div>
  )
}

export default StyleSelector;