import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import fetchApi from "services/card_api";
import Button from "./Button";
import Loader from "./Loader/Loader";
  
class App extends Component {
  state = {
    images: null,
    cardsName: '',
    page: 1,
    per_page: 12,
    loading: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const { cardsName, page, per_page } = this.state;

    if (prevState.cardsName !== cardsName) {
      this.setState({loading: true})
      fetchApi(cardsName, page, per_page)
        .then(images => this.setState({ images: images.hits }))
        .finally(() => this.setState({ loading: false }));
    }

    if (prevState.page !== page) {
      fetchApi(cardsName, page, per_page)
        .then(images => this.setState(prevState => ({ images: [...prevState.images, ...images.hits] })))
        .finally(() => this.setState({ loading: false }));
    }
  }

    getPage = (page) => {
      this.setState({ page }) 
  }

  getsInputValue = (cardsName) => {
    this.setState({cardsName})
  }

  render() {
    const { images, loading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.getsInputValue} />
        {images && <ImageGallery fethInfo={images} />}
        {loading && <Loader />}
        {images && <Button onClick={this.getPage} />}
    </div>
    );
  }
};

export default App;
