import PropTypes from 'prop-types';
import { Component } from 'react';
import { ListItem, GalleryImage, ModalImage } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  
  static propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string,
      }).isRequired,
  };

  state = {
    isModalOpen: false,
  }

  toggleModal = () => this.setState(prevState =>
    ({ isModalOpen: !prevState.isModalOpen }));

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.item;
    
    return (
      <ListItem onClick={this.toggleModal}>
        <GalleryImage src={webformatURL} alt={tags} />
        {this.state.isModalOpen && 
          <Modal onClose={this.toggleModal}>
            <ModalImage src={largeImageURL} alt={tags} />
          </Modal>
        }
      </ListItem>
    );
  }
};

