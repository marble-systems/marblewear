import React from 'react';
import PropTypes from 'prop-types';
import '../Reviews/reviews.css';

const Modal = ({ show, title, subtitle, body, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div id="my-modal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span onClick={onClose} className="close">&times;</span>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        <div className="modal-body">
          {body()}
          <button onClick={onClose}>Close</button>
        </div>
        <div className="modal-footer">
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  body: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  position: PropTypes.number
};

export default Modal;