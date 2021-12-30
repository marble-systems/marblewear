import React from 'react';
import PropTypes from 'prop-types';
import starButton from './images/starButton.png';
import deleteButton from './images/deleteButton.png';

function ActionButton({productCardSetType}) {
  if (productCardSetType === 'RelatedProducts') {
    return (
      <img src={starButton} style={{width: '10%', height: '10%'}}></img>
    );
  } else {
    return (
      <img src={deleteButton} style={{width: '10%', height: '10%'}}></img>
    );
  }
}

ActionButton.propTypes = {
  productCardSetType: PropTypes.string.isRequired
};

export default ActionButton;