import React, { Component } from "react";
import { Segment, Card, Button, Message } from "semantic-ui-react";
import Favorite from "./Favorite";
import WeeklyChart from "./WeeklyChart";

export default class FavoritesList extends Component {
  state = {
    startIdx: 0,
    endIdx: 4,
    showFavorites: false,
    bool: false
    // loadedFavorites: []
  };

  // componentWillMount() {
  //   this.setState({
  //     loadedFavorites: this.props.favorites
  //   });
  // }

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 4,
        endIdx: prevState.endIdx + 4
      };
    });
  };

  showLess = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx - 4,
        endIdx: prevState.endIdx - 4
      };
    });
  };
  handleShowEnter = async () => {
    await this.props.handleCryptoPriceFetch();
    this.setState({
      // startIdx: 0,
      // endIdx: 4,
      showFavorites: true
    });
  };

  handleShowExit = async () => {
    // await this.props.handlePriceClear();
    this.setState(prevState => {
      // console.log(prevState);
      return {
        showFavorites: false
      };
    });
  };
  render() {
    // console.log("favorites List", this.props);

    const favPrices = this.props.prices.slice(
      this.state.startIdx,
      this.state.endIdx
    );

    return (
      <Segment
        inverted
        onMouseEnter={() => this.handleShowEnter()}
        onMouseLeave={() => this.handleShowExit()}
      >
        <Message color="violet">
          <h3>Favorites</h3>
        </Message>
        {this.state.showFavorites === true ? (
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
              disabled={this.state.endIdx > this.props.prices.length - 1}
            />

            <Card.Group centered itemsPerRow={4}>
              {favPrices.map((crypto, index) => {
                // console.log("Item", crypto[0]);
                return (
                  <Card inverted>
                    <WeeklyChart
                      key={index}
                      {...crypto}
                      removeCryptoFromFavorites={
                        this.props.removeCryptoFromFavorites
                      }
                    />
                  </Card>
                );
              })}
            </Card.Group>
          </Segment>
        ) : null}
      </Segment>
    );
  }
}
