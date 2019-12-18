import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import FavoritesList from "./FavoritesList";

export default class FavoritesCont extends Component {
  componentDidMount() {
    this.props.handleCryptoPriceFetch();
  }

  // handleFetchPrices = async () => {
  //   await this.props.handleCryptoPriceFetch();
  // };
  render() {
    // console.log("Favorites Cont", this)
    const sidePrices = this.props.favoritesPrices.map((price, index) => {
      return {
        dayOne: price[0],
        dayTwo: price[1],
        dayThree: price[2],
        dayFour: price[3],
        dayFive: price[4],
        daySix: price[5],
        daySeven: price[6]
      };
    });
    return (
      <Segment inverted>
        <FavoritesList
          favorites={this.props.favorites}
          removeCryptoFromFavorites={this.props.removeCryptoFromFavorites}
          prices={sidePrices}
        />
      </Segment>
    );
  }
}
