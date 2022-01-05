/* eslint-disable react/prop-types */
import React from 'react';

function Features ({currentProduct}) {

  return (
    <div>
      {currentProduct.features.map((feature) =>
        // eslint-disable-next-line react/jsx-key
        <div className="row">
          {`${feature.feature}: ${feature.value}`}
        </div>
      )}
    </div>
  );
}

export default Features;