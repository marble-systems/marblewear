import React, { useState } from 'react';
import './prodStyles.css';


function StyleSelector ({styles, currentStyleID, currentProductID, changeCurrentStyle}) {
  const getCurrentProductObject = (targetId, allProducts) => {
    return allProducts.filter((product) => {
      return product.product_id === targetId
    })
  }

  const currentProductObject = getCurrentProductObject(currentProductID, styles);

  const getStylesArray = (targetStyleId, stylesArray) => {
    return stylesArray.filter((style) => {
      return style.style_id === targetStyleId
    })
  }

  const stylesArray = currentProductObject[0]['results'];

  const currentStyleObject = getStylesArray(currentStyleID, stylesArray)


  return (
    <div>
      <h3>Category goes here</h3>
      <h2>{currentStyleObject[0]['name']}</h2>
      <h4>{`$${currentStyleObject[0]['original_price']}`}</h4>

      {styles[0]['results'].map((style) =>
            <div>
            Style: {`${style.name}`}
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