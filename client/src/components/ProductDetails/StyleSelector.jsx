/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';

function StyleSelector ({productStylesArray, currentStyleID, changeCurrentStyle, currentProduct}) {

  const getCurrentStyleObject = (targetStyleId, stylesArray) => {
    return stylesArray.filter((style) => {
      return style.style_id === targetStyleId;
    });
  };

  const currentStyleObject = getCurrentStyleObject(currentStyleID, productStylesArray);


  return (
    <div className="flex-container wrap">
      <h5>{currentProduct.category}</h5>
      <h2>{currentProduct.name}</h2>
      <h5>{currentStyleObject[0]['original_price']}</h5>
      <h2>Style--! {currentStyleObject[0]['name']}</h2>

      {productStylesArray.map((style) =>
        <img
          className="flex-item styleThumbnail"
          src={style.photos[0]['thumbnail_url']}
          onClick={() => changeCurrentStyle(style.style_id)}
        />
      )}
    </div>
  );
}

export default StyleSelector;