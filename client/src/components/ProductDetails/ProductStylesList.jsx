import React from 'react';
import css from './prodStyles.css';
import ProductStyleThumbnail from './ProductStyleThumbnail.jsx'



function ProductStylesList ({styles}) {
  return (
    <div>
      {styles.map((style) =>
        <ProductStyleThumbnail style={style}/>
      )}
    </div>
  )
}

export default ProductStylesList;