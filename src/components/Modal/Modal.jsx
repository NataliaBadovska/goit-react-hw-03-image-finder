import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {

    componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
     }

    handleKeyDown = (evt) => {
        if (evt.code === 'Escape') {
             this.props.closeModal();
        } 
    }

    handleOverlayClick = (evt) => {
        if (evt.currentTarget === evt.target) {
            this.props.closeModal();
        }
    }
   
    render() {
        const { tags, largeImageURL } = this.props;

         return <div className={css.overlay} onClick={this.handleOverlayClick}>
             <div className={css.modal}>
                 <img src={largeImageURL} alt={tags} />
             </div>
    </div>
    }
}
 
Modal.propTypes = {
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
}

export default Modal;
