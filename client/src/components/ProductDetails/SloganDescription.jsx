import React from 'react';
import PropTypes from 'prop-types';

function SloganDescription ({currentProduct}) {
  return (
    <div>
      <h5>{currentProduct.slogan}</h5>
      <h5>{currentProduct.description}</h5>
    </div>
  );
}

SloganDescription.propTypes = {
  currentProduct: PropTypes.object.isRequired,
};

export default SloganDescription;