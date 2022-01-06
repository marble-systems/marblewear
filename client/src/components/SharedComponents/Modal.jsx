import React from 'react';
import PropTypes from 'prop-types';
import '../Reviews/reviews.css';

const Modal = ({ show, title, subtitle, body, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal-component">
      <div className="modal-component-content">
        <div className="modal-component-header">
          <span onClick={onClose} className="close">&times;</span>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        <div className="modal-component-body">
          {body()}
        </div>
        <div className="modal-component-footer">
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  body: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  position: PropTypes.number
};

export default Modal;