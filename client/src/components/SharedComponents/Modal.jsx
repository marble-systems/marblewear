import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    let { show, body } = this.props;
    if (!show) {
      return null;
    }
    return (
      <div style={{width: '500px', background: 'white', border: '1px solid #ccc'}}>
        <div className="actions">
          <img src={body}></img>
          <button className="toggle-button" onClick={this.props.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  body: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

// TODO: change to functional component
// allow body to be a react component or JSX
// add styling
// reference https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6

export default Modal;