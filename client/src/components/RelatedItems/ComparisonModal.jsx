import React from 'react';
import PropTypes from 'prop-types';

function ComparisonModal({currentProductInfo, comparisonRelatedProduct}) {
  let comparedFeaturesObj = {};

  let addToComparedFeaturesObj = (productFeatures, product) => {
    for (var i = 0; i < productFeatures.length; i++) {
      if (productFeatures[i].value) {
        let feature = `${productFeatures[i].value} ${productFeatures[i].feature}`;
        if (!comparedFeaturesObj[feature]) {
          comparedFeaturesObj[feature] = {feature: feature};
        }
        comparedFeaturesObj[feature][product] = true;
      }
    }
  };

  addToComparedFeaturesObj(currentProductInfo.features, 'current');
  addToComparedFeaturesObj(comparisonRelatedProduct.features, 'related');

  let comparedFeatures = Object.values(comparedFeaturesObj);

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

              return (<p className="text-center" key={index}>{feature.feature}</p>);
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

