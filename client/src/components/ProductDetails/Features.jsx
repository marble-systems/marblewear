import React from 'react';
import PropTypes from 'prop-types';

function Features ({currentProduct}) {
  return (
    <div>
      {currentProduct.features.map((feature, idx) =>
        // eslint-disable-next-line react/jsx-key
        <div className="row" key={idx}>
          {`${feature.feature}: ${feature.value}`}
        </div>
      )}
    </div>
  );
}

Features.propTypes = {
  currentProduct: PropTypes.object.isRequired
};

export default Features;