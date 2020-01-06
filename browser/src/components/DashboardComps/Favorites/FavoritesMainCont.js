import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import FavoritesSubCont from "./FavoritesSubCont";
import LoadingFavorites from "./LoadingFavorites";
export default class FavoritesMainCont extends Component {
  state = { loadedFavorites: [] };

  componentDidMount() {
    this.setState({ loadedFavorites: this.props.favorites });
  }
  render() {
    // console.log("Favorites Main Cont", this.state, this.props);

    return (
      <FavoritesSubCont
        handlePriceClear={this.props.handlePriceClear}
        favorites={this.props.favorites}
        handleShowFavorites={this.props.handleShowFavorites}
        removeCryptoFromFavorites={this.props.removeCryptoFromFavorites}
        favoritesPrices={this.props.favoritesPrices}
        handleCryptoPriceFetch={this.props.handleCryptoPriceFetch}
      />
    );
  }
}
