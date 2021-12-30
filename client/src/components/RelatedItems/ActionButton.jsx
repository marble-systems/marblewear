import React from 'react';
import PropTypes from 'prop-types';
import starButton from './images/starButton.png';
import deleteButton from './images/deleteButton.png';

function ActionButton({productCardSetType}) {
  let buttonImageSrc = productCardSetType === 'RelatedProducts' ? starButton : deleteButton;
  return (
    <input type="image" src={buttonImageSrc} style={{width: 'auto', height: '5%', position: 'absolute', top: '10px', right: '10px', backgroundColor: 'lightGrey', borderRadius: '50%'}}></input>
  );
}

ActionButton.propTypes = {
  productCardSetType: PropTypes.string.isRequired
};

export default ActionButton;