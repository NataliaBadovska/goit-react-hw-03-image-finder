import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css'

class LoadMore extends Component {
    state = {
        page: 2,    
    }

    loadMoreClick = () => {        
        this.setState(prevState => ({ page: prevState.page + 1 }))
        this.props.onClick(this.state.page)
    }

    render() {
        return <button type="button" className={css.button} onClick={this.loadMoreClick}>Load more</button>
    }
}

LoadMore.propTypes = {
    onClick: PropTypes.func,
}
 
export default LoadMore;

    