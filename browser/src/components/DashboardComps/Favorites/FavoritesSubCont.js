import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import FavoritesList from "./FavoritesList";

export default class FavoritesSubCont extends Component {
  // componentDidMount() {
  //   this.props.handleCryptoPriceFetch();
  // }

  render() {
    // console.log("Favorites Sub Cont", this.props);

    return (
      // <Segment inverted>
      <FavoritesList
        handlePriceClear={this.props.handlePriceClear}
        handleCryptoPriceFetch={this.props.handleCryptoPriceFetch}
        handleShowFavorites={this.props.handleShowFavorites}
        removeCryptoFromFavorites={this.props.removeCryptoFromFavorites}
        prices={this.props.favoritesPrices.map(price => {
          return {
            dayOne: price[0],
            dayTwo: price[1],
            dayThree: price[2],
            dayFour: price[3],
            dayFive: price[4],
            daySix: price[5],
            daySeven: price[6]
          };
        })}
      />
      // </Segment>
    );
  }
}
