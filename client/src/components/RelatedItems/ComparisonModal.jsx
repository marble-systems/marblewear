import React from 'react';
import PropTypes from 'prop-types';
import checkButton from './images/checkButton.png';
import './relatedItemsStyle.css';

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
            <div className="comparison-modal-body">
              <div style={{width: '40%', textAlign: 'left'}}><h6>{currentProductInfo.name}</h6></div>
              <div style={{width: '20%'}}></div>
              <div style={{width: '40%', textAlign: 'right'}}><h6>{comparisonRelatedProduct.name}</h6></div>
            </div>
            {comparedFeatures.map((feature, index) => {
              let checkMark = <input type="image" src={checkButton}></input>;
              let current = feature.current ? checkMark : null;
              let related = feature.related ? checkMark : null;
              return (
                <div key={index} className="comparison-modal-body">
                  <div className='comparison-modal-checkmark' style={{width: '10%'}}>{current}</div>
                  <div className="comparison-modal-feature" style={{width: '80%', textAlign: 'center'}}>{feature.feature}</div>
                  <div className='comparison-modal-checkmark' style={{width: '10%'}}>{related}</div>
                </div>);
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

