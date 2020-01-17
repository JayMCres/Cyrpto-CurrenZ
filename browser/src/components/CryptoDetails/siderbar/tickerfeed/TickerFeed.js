import React, { Component } from "react";

import { List } from "semantic-ui-react";
import FeedItem from "./FeedItem";

export default class TickerFeed extends Component {
  state = {
    startIdx: 0,
    endIdx: 10
  };

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.handleFeed();
    }, 3000);
  };

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 10,
        endIdx: prevState.endIdx + 10
      };
    });
  };

  handleFeed = () => {
    if (this.state.endIdx === this.props.feedData.length) {
      this.setState({
        startIdx: 0,
        endIdx: 10
      });
    }
    this.showMore();
  };
  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  handleIntervalStop = () => {
    clearInterval(this.carouselInterval);
  };
  handleIntervalStart = () => {
    this.startCarousel();
  };

  render() {
    // console.log("tickerfeed Props", this.props);
    const tickerFeedList = this.props.feedData.slice(
      this.state.startIdx,
      this.state.endIdx
    );
    // console.log("Cards Cont Props", this.props);

    return (
      <List
        animated
        verticalAlign="middle"
        divided
        onMouseLeave={this.handleIntervalStart}
      >
        {tickerFeedList.map(item => {
          return (
            <FeedItem
              key={item.id}
              {...item}
              handleIntervalStop={this.handleIntervalStop}
            />
          );
        })}
      </List>
    );
  }
}
