import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';


class ImageGallery extends Component{
  render() {
    const { fethInfo } = this.props;
    
    return <ul className={css.imageGallery}>
      {fethInfo.map(card => (<ImageGalleryItem key={card.id} card={card} />))}
    </ul>
  }
}

ImageGallery.propTypes = {
  fethInfo: PropTypes.array.isRequired,
}

export default ImageGallery;