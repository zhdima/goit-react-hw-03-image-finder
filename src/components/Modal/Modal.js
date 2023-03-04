import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalContent, ModalButtonClose } from './Modal.styled';
import { BsXLg } from 'react-icons/bs';

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
          <ModalButtonClose type="button" onClick={this.props.onClose}>
            <BsXLg size="12"/>
          </ModalButtonClose>

          {this.props.children}

        </ModalContent>
      </ModalOverlay>,
    document.getElementById('modal-root'));
  }
};

