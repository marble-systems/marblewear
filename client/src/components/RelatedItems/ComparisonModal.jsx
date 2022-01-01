import React from 'react';
import PropTypes from 'prop-types';

function ComparisonModal({currentProductInfo}) {
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
            {currentProductInfo.features.filter(feature => {
              return feature.value !== null;
            })
              .map((feature, index) => {
                return (<p className="text-center" key={index}>{`${feature.value} ${feature.feature}`}</p>);
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

ComparisonModal.propTypes = {
  currentProductInfo: PropTypes.object,
};

export default ComparisonModal;

