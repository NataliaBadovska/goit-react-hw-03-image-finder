import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends Component{
    state = {
        cardsName:'',
    }

    handleChangeInput = (evt) => {
        const { value } = evt.target;
        this.setState({cardsName: value.toLowerCase()})
    }

    handleSubmit = (evt) => {
        const { onSubmit } = this.props;
        const { cardsName } = this.state;
        evt.preventDefault();

        if (cardsName.trim() === '') {
            return
        }

        onSubmit(cardsName);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({cardsName:''})
    }

    render() {
        return <>
            <header className={css.searchbar}>
                <form className={css.form} onSubmit = {this.handleSubmit}>
                    <button type="submit" className={css.button}>
                        <span className={css.button_label}>Search</span>
                    </button>
                    <input
                        className={css.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.cardsName}
                        onChange={this.handleChangeInput}
                    />
                </form>
            </header>
        </>
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
