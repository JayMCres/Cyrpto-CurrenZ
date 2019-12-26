import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import FavoritesSubCont from "./FavoritesSubCont";

export default class FavoritesMainCont extends Component {
  render() {
    // console.log("Favorites Main Cont", this.state);

    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        {/* {this.props.favorites.length !== this.props.favoritesPrices.length ? (
          <div>Loading...</div>
        ) : ( */}
        <FavoritesSubCont
          handlePriceClear={this.props.handlePriceClear}
          favorites={this.props.favorites}
          handleShowFavorites={this.props.handleShowFavorites}
          removeCryptoFromFavorites={this.props.removeCryptoFromFavorites}
          favoritesPrices={this.props.favoritesPrices}
          handleCryptoPriceFetch={this.props.handleCryptoPriceFetch}
        />
        {/* )} */}
      </Segment>
    );
  }
}
