import PropTypes from 'prop-types';
import { Component } from 'react';
import { ModalOverlay, ModalContent } from './Modal.styled';
import { createPortal } from 'react-dom';

export class Modal extends Component {
  
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  
  handleKeyDown = evt => {
    if (evt.key === "Escape") {
      this.props.onClose();
    }
  }
  
  handleOverlayClick = evt => {
    evt.stopPropagation();
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  }

  render() {
    return createPortal(
      <ModalOverlay onClick={this.handleOverlayClick}>
        <ModalContent>
          {this.props.children}
        </ModalContent>
      </ModalOverlay>,
    document.getElementById('modal-root'));
  }
};

