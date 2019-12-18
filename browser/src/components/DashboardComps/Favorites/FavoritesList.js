import React, { Component } from "react";
import { Segment, Card, Button, Message } from "semantic-ui-react";
// import Favorite from "./Favorite";
import WeeklyChart from "./WeeklyChart";

export default class FavoritesList extends Component {
  state = {
    startIdx: 0,
    endIdx: 5
  };

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 5,
        endIdx: prevState.endIdx + 5
      };
    });
  };

  showLess = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx - 5,
        endIdx: prevState.endIdx - 5
      };
    });
  };

  render() {
    // console.log("favorites List", this.props);

    // console.log("stockIndexItems", marketIndexItems);
    const favoriteItems = this.props.favorites.slice(
      this.state.startIdx,
      this.state.endIdx
    );
    const sidePrices = this.props.prices.map((price, index) => {
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
      <div>
        <Message color="violet">
          <h3>Favorites</h3>
        </Message>
        <Segment inverted>
          <Button
            floated="left"
            onClick={() => this.showLess()}
            content="Back"
            icon="left arrow"
            labelPosition="left"
            disabled={this.state.startIdx === 0}
          />
          <Button
            floated="right"
            onClick={() => this.showMore()}
            content="Next"
            icon="right arrow"
            labelPosition="right"
            disabled={this.state.endIdx > this.props.favorites.length - 1}
          />

          <Card.Group centered itemsPerRow={5}>
            {sidePrices.map((crypto, index) => {
              // console.log("Item", crypto[0]);
              return (
                <WeeklyChart
                  key={index}
                  {...crypto}
                  removeCryptoFromFavorites={
                    this.props.removeCryptoFromFavorites
                  }
                />
              );
            })}

            {/* {favoriteItems.map((item, index) => {
              // console.log(item);
              return (
                <Favorite
                  key={index}
                  {...item}
                  removeCryptoFromFavorites={
                    this.props.removeCryptoFromFavorites
                  }
                  prices={this.props.favoritesPrices}
                />
              );
            })} */}
          </Card.Group>
        </Segment>
      </div>
    );
  }
}
