/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import './prodStyles.css';

function StyleSelector ({productStylesArray, currentStyleID, changeCurrentStyle}) {


  const getCurrentStyleObject = (targetStyleId, stylesArray) => {
    return stylesArray.filter((style) => {
      return style.style_id === targetStyleId;
    });
  };

  const currentStyleObject = getCurrentStyleObject(currentStyleID, productStylesArray);

  return (
    <div className="flex-container wrap">
      <h2>{currentStyleObject[0]['name']}</h2>
      <h4>{`$${currentStyleObject[0]['original_price']}`}</h4>

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