import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import FavoritesSubCont from "./FavoritesSubCont";

export default class FavoritesMainCont extends Component {
  // componentDidMount() {
  //   this.props.handleCryptoPriceFetch();
  // }
  // handleCryptoPriceFetch = async () => {
  //   return await this.props.favorites.map(crypto => {
  //     // console.log(crypto.details.id);
  //     return this.props.addPricesToFavorites(crypto.details.id);
  //   });
  // };
  render() {
    // console.log("Favorites Main Cont", this.state);

    return (
      <Segment inverted>
        <FavoritesSubCont
          handlePriceClear={this.props.handlePriceClear}
          favorites={this.props.favorites}
          handleShowFavorites={this.props.handleShowFavorites}
          removeCryptoFromFavorites={this.props.removeCryptoFromFavorites}
          favoritesPrices={this.props.favoritesPrices}
          handleCryptoPriceFetch={this.props.handleCryptoPriceFetch}
        />
      </Segment>
    );
  }
}
