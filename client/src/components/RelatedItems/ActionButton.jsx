import React from 'react';
import PropTypes from 'prop-types';
import starButton from './images/starButton.png';
import deleteButton from './images/deleteButton.png';


function ActionButton({productCardType, removeProductFromFavorites, productId, changeComparisonRelatedProduct}) {
  if (productCardType === 'YourOutfit') {
    return (
      <input type="image" src={deleteButton} onClick={() => {removeProductFromFavorites(productId);}} style={{width: 'auto', height: '5%', position: 'absolute', top: '10px', right: '10px', backgroundColor: 'lightGrey', borderRadius: '50%'}}></input>
    );
  } else {
    return (
      <input type="image" src={starButton} data-bs-toggle="modal" data-bs-target="#comparisonModal" style={{width: 'auto', height: '5%', position: 'absolute', top: '10px', right: '10px', backgroundColor: 'lightGrey', borderRadius: '50%'}} onClick={(e) => changeComparisonRelatedProduct(productId)}></input>
    );
  }
}

ActionButton.propTypes = {
  productCardType: PropTypes.string,
  removeProductFromFavorites: PropTypes.func,
  productId:PropTypes.number,
  changeComparisonRelatedProduct: PropTypes.func,
};

export default ActionButton;