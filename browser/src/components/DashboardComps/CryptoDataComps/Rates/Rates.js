import React, { Component } from "react";
import { Segment, Card, List } from "semantic-ui-react";
import RateItem from "./RateItem";

export default class Rates extends Component {
  state = {
    startIdx: 0,
    endIdx: 5
  };

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.handleIndexes();
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

  handleIndexes = () => {
    if (this.state.endIdx === this.props.rates.length) {
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
    // console.log("IndexList Props", this.state);
    const ratesList = this.props.rates.slice(
      this.state.startIdx,
      this.state.endIdx
    );

    return (
      <Card.Group itemsPerRow={5}>
        {ratesList.map((item, index) => {
          return <RateItem index={index} key={item.id} {...item} />;
        })}
      </Card.Group>
    );
  }
}
