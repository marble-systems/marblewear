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
    <div clasName="container">
      <h2>{currentStyleObject[0]['name']}</h2>
      <h4>{`$${currentStyleObject[0]['original_price']}`}</h4>

      {productStylesArray.map((style) =>
        <div clasName="row" key={style} style={{width: '20em', margin: '1em', position: 'relative'}}>
          <img
            className="styleThumbnail"
            src={style.photos[0]['thumbnail_url']}
            onClick={() => changeCurrentStyle(style.style_id)}
          />
        </div>
      )}
    </div>
  );
}

export default StyleSelector;