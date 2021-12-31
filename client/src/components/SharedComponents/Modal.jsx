import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({show, body, onClose}) => {
  if (!show) {
    return null;
  }
  return (
    <div style={{
      background: 'rgba(56, 47, 52, 0.08)',
      border: '1px solid #ccc',
      position: 'fixed',
      top: '25%',
      left: '25%'}}>
      <div className="actions">
        <div style={{position: 'relative', }} className="modal-body">
          <a style={{ textDecoration: 'none', color: 'black', position: 'absolute', top: '20px', right: '20px', cursor: 'pointer'}}
            className="toggle-button"
            onClick={onClose}>
            X
          </a>
          <div style={{width: '100%', height: 'auto'}}>
            {body()}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  body: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

// reference https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6

export default Modal;