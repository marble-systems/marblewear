import React from 'react';
import PropTypes from 'prop-types';

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
      <h5>${currentStyleObject[0]['original_price']}</h5>
      <h2>Style: {currentStyleObject[0]['name']}</h2>

      {productStylesArray.map((style, idx) =>
        <img
          className="flex-item styleThumbnail"
          key={idx}
          src={style.photos[0]['thumbnail_url']}
          onClick={() => changeCurrentStyle(style.style_id)}
        />
      )}
    </div>
  );
}

StyleSelector.propTypes = {
  productStylesArray: PropTypes.array.isRequired,
  currentStyleID: PropTypes.number.isRequired,
  currentProduct: PropTypes.object.isRequired,
  changeCurrentStyle: PropTypes.func

};
export default StyleSelector;