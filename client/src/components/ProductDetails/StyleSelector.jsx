import React from 'react';
import PropTypes from 'prop-types';

function StyleSelector ({productStylesArray, currentStyleID, currentProduct, changeCurrentStyle, updateMainImage}) {

  const getCurrentStyleObject = (targetStyleId, stylesArray) => {
    return stylesArray.filter((style) => {
      return style.style_id === targetStyleId;
    });
  };

  const currentStyleObject = getCurrentStyleObject(currentStyleID, productStylesArray);

  const setThumbnailClass = (id) => {
    return id === currentStyleID ? 'flex-item styleThumbnailMain' : 'flex-item styleThumbnail';
  };

  return (
    <div className="flex-container wrap">
      <h5>{currentProduct.category}</h5>
      <h2>{currentProduct.name}</h2>
      <h5>${currentStyleObject[0]['original_price']}</h5>
      <h4>Style: {currentStyleObject[0]['name']}</h4>

      {productStylesArray.map((style, idx) =>
        <img
          className={setThumbnailClass(style.style_id)}
          key={idx}
          src={style.photos[0]['thumbnail_url']}
          onClick={() => {
            changeCurrentStyle(style.style_id);
            updateMainImage(style.photos[0]['url']);
          }}
        />
      )}
    </div>
  );
}

StyleSelector.propTypes = {
  productStylesArray: PropTypes.array.isRequired,
  currentStyleID: PropTypes.number.isRequired,
  currentProduct: PropTypes.object.isRequired,
  changeCurrentStyle: PropTypes.func.isRequired,
  updateMainImage: PropTypes.func.isRequired

};
export default StyleSelector;