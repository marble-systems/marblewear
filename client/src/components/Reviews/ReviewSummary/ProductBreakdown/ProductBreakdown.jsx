import React from 'react';
import PropTypes from 'prop-types';
import CharacteristicBar from './CharacteristicBar.jsx';

const ProductBreakdown = ({ characteristics }) => {
  const characteristicNames = Object.keys(characteristics);
  return (
    <div className="product-breakdown">
      {characteristicNames.map((name) => {
        let { id, value } = characteristics[name];
        return (
          <CharacteristicBar
            characteristic={name}
            key={id}
            value={value}
          />
        );
      })}
    </div>
  );
};

ProductBreakdown.propTypes = {
  characteristics: PropTypes.object
};

export default ProductBreakdown;
