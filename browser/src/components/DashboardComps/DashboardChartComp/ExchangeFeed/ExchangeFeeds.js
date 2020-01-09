import React, { Component } from "react";
import { List, Header, Icon, Grid } from "semantic-ui-react";
import ExchangeFeed from "./ExchangeFeed";

export default class ExchangeFeeds extends Component {
  state = {
    startIdx: 0,
    endIdx: 5
  };

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.handleFeed();
    }, 1500);
  };

  showMoreFeed = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 5,
        endIdx: prevState.endIdx + 5
      };
    });
  };

  handleFeed = () => {
    if (this.state.endIdx === this.props.exchanges.length) {
      this.setState({
        startIdx: 0,
        endIdx: 5
      });
    }
    this.showMoreFeed();
  };

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  render() {
    // console.log("Exchanges Props", this.state);
    const exchangesList = this.props.exchanges.slice(
      this.state.startIdx,
      this.state.endIdx
    );

    return (
      <List animated verticalAlign="middle" divided>
        {exchangesList.map((item, index) => {
          return <ExchangeFeed index={index} key={item.id} {...item} />;
        })}
      </List>
    );
  }
}
