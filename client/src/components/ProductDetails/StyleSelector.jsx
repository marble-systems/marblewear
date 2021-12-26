import React from 'react';
import css from './prodStyles.css';
import StyleThumbnail from './StyleThumbnail.jsx'

//props(styles) = array of objs. ea obj is a style

// Below the product information, the user should be presented all the styles of the product and have the ability to toggle between them.  Each style should be displayed as a thumbnail.

// All styles should display for the current product at all times.  There is no limit to the number of styles a product can have.  The thumbnails should appear in rows of 4.

// The current selection should be indicated within the list by the overlay of a checkmark on top of the thumbnail for that style.   Additionally, the title for that style should appear typed out in full above the thumbnail list.

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