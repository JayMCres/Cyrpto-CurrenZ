import React, { Component } from "react";
import { Segment, Card, Button, Icon, Header } from "semantic-ui-react";
import Favorite from "./Favorite";
import WeeklyChart from "./WeeklyChart";

export default class FavoritesList extends Component {
  state = {
    startIdx: 0,
    endIdx: 4,
    showFavorites: false,
    bool: false
  };

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
    await this.setState(prevState => {
      // console.log(prevState);
      return {
        showFavorites: false
      };
    });
    if (this.state.startIdx !== 0) {
      this.showLess();
    }
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
        style={{
          "background-color": "black"
        }}
        onMouseEnter={() => this.handleShowEnter()}
        onMouseLeave={() => this.handleShowExit()}
      >
        <Header
          as="h3"
          block
          style={{
            "border-style": "double",
            "border-color": "#6666ff",
            "background-color": "black"
          }}
        >
          <Icon name="btc" />
          <Header.Content>Crypto Currency Watchlist</Header.Content>
        </Header>
        {this.state.showFavorites === true ? (
          <Segment
            inverted
            style={{
              "border-style": "double",
              "border-color": "#6666ff",
              "background-color": "black",
              minHeight: 70
            }}
          >
            <Button
              basic
              inverted
              color="violet"
              floated="left"
              onClick={() => this.showLess()}
              content="Back"
              icon="left arrow"
              labelPosition="left"
              disabled={this.state.startIdx === 0}
            />
            <Button
              basic
              inverted
              color="violet"
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
