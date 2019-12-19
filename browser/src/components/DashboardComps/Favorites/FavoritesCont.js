import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import FavoritesList from "./FavoritesList";

export default class FavoritesCont extends Component {
  state = {
    loadedFavorites: []
  };
  componentDidMount() {
    this.props.handleCryptoPriceFetch();
    this.setState({
      loadedFavorites: this.props.favorites
    });
  }

  render() {
    console.log("Favorites Cont", this.props, this.state);

    return (
      <Segment inverted>
        <FavoritesList
          // favorites={this.props.favorites}
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
      </Segment>
    );
  }
}
