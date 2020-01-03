import React, { Component } from "react";
import { Segment, Card, List } from "semantic-ui-react";
import MarketCap from "./MarketCap";

export default class MarketCaps extends Component {
  state = {
    startIdx: 0,
    endIdx: 5
  };

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.handleMarketCap();
    }, 800);
  };

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 5,
        endIdx: prevState.endIdx + 5
      };
    });
  };

  handleMarketCap = () => {
    if (this.state.endIdx === this.props.marketData.length) {
      this.setState({
        startIdx: 0,
        endIdx: 5
      });
    }
    this.showMore();
  };
  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  render() {
    console.log("MarketCaps Props", this.props);
    const marketCapList = this.props.marketData.slice(
      this.state.startIdx,
      this.state.endIdx
    );

    return (
      <Card.Group itemsPerRow={5}>
        {marketCapList.map((item, index) => {
          return <MarketCap index={index} key={item.ticker} {...item} />;
        })}
      </Card.Group>
    );
  }
}
