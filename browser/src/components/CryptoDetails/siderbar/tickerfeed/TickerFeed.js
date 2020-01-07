import React, { Component } from "react";

import { Segment, Header, List } from "semantic-ui-react";
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
    }, 2000);
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

  render() {
    console.log("tickerfeed Props", this.props);
    const tickerFeedList = this.props.feedData.slice(
      this.state.startIdx,
      this.state.endIdx
    );
    // console.log("Cards Cont Props", this.props);

    return (
      <List animated verticalAlign="middle" divided>
        {tickerFeedList.map(item => {
          return <FeedItem key={item.id} {...item} />;
        })}
      </List>
    );
  }
}
