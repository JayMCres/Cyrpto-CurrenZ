import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Market from "./Market";

export default class Markets extends Component {
  state = {
    startIdx: 0,
    endIdx: 5
  };

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.handleMarkets();
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

  handleMarkets = () => {
    if (this.state.endIdx === this.props.markets.length) {
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
    // console.log("Exchanges Props", this.state);
    const marketsList = this.props.markets.slice(
      this.state.startIdx,
      this.state.endIdx
    );

    return (
      <Card.Group itemsPerRow={5} centered>
        {marketsList.map((item, index) => {
          return <Market index={index} key={item.id} {...item} />;
        })}
      </Card.Group>
    );
  }
}
