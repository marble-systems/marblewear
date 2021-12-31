import React from 'react';

function ComparisonModal(props) {
  return (
    <div className="modal fade" id="comparisonModal" tabIndex="-1"  aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">COMPARING</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonModal;

