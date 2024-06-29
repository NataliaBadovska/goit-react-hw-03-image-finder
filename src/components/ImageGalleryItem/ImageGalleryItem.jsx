import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'
import Modal from 'components/Modal';

class ImageGalleryItem extends Component{
    state = {
        showModal: false,
    }

    toggleModal = () => {
         this.setState(({ showModal }) => ({
      showModal: !showModal, 
    }));
    }

    render() {
        const { showModal } = this.state;
        const { card } = this.props;

        return <>
            <li className={css.imageGalleryItem} >
                <img src={card.webformatURL} alt={card.tags} className={css.imageGalleryItem_image} onClick={this.toggleModal} />
            </li>
            {showModal && <Modal largeImageURL={card.largeImageURL} tags={card.tags} closeModal={ this.toggleModal} />} 
        </>
    }
}

ImageGalleryItem.propTypes = {
    card: PropTypes.object.isRequired,
}

export default ImageGalleryItem;