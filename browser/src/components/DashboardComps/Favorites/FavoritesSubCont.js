import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import FavoritesList from "./FavoritesList";

export default class FavoritesSubCont extends Component {
  render() {
    console.log("Favorites Sub Cont", this.props);

    return (
      <FavoritesList
        handlePriceClear={this.props.handlePriceClear}
        handleCryptoPriceFetch={this.props.handleCryptoPriceFetch}
        handleShowFavorites={this.props.handleShowFavorites}
        removeCryptoFromFavorites={this.props.removeCryptoFromFavorites}
        prices={this.props.favoritesPrices.map(price => {
          return {
            dayOne: price[4],
            dayTwo: price[3],
            dayThree: price[2],
            dayFour: price[1],
            dayFive: price[0]
          };
        })}
      />
      // </Segment>
    );
  }
}
