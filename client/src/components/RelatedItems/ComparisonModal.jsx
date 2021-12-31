import React from 'react';

function ComparisonModal(props) {
  return (
    <div className="modal-dialog modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">COMPARING</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>Modal body text goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default ComparisonModal;

