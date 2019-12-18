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

    return (
      <Segment inverted>
        <FavoritesList
          favorites={this.props.favorites}
          removeCryptoFromFavorites={this.props.removeCryptoFromFavorites}
          prices={this.props.favoritesPrices}
        />
      </Segment>
    );
  }
}
