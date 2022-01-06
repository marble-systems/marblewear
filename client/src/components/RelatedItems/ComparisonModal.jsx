import React from 'react';
import PropTypes from 'prop-types';

function ComparisonModal({currentProductInfo, comparisonRelatedProduct}) {
  let features = currentProductInfo.features.filter(feature => {
    return feature.value !== null;
  }).concat(comparisonRelatedProduct.features.filter(feature => {
    return feature.value !== null;
  }));

  let comparedFeatures = new Set();

  for (var i = 0; i < features.length; i++) {
    let feature = `${features[i].value} ${features[i].feature}`;
    comparedFeatures.add(feature);
  }

  comparedFeatures = Array.from(comparedFeatures);
  console.log(comparedFeatures);

  return (
    <div className="modal fade" id="comparisonModal" tabIndex="-1"  aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title">COMPARING</p>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h5>{currentProductInfo.name}</h5>
            <h5>{comparisonRelatedProduct.name}</h5>
            {comparedFeatures.map((feature, index) => {
              return (<p className="text-center" key={index}>{feature}</p>);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

ComparisonModal.propTypes = {
  currentProductInfo: PropTypes.object,
  comparisonRelatedProduct: PropTypes.object,
};

export default ComparisonModal;

