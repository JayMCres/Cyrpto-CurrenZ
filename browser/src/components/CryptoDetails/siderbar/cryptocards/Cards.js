import React, { Component } from "react";
import useInfiniteScroll from "./useInfiniteScroll";
import Card from "./Card";
import { Segment, Header, List } from "semantic-ui-react";

class Cards extends Component {
  state = {
    startIdx: 0,
    endIdx: 5
  };

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.handleCards();
    }, 800);
  };

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 1,
        endIdx: prevState.endIdx + 1
      };
    });
  };

  handleCards = () => {
    if (this.state.endIdx === this.props.cards.length) {
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
    // console.log("MarketCaps Props", this.props);
    const cardsList = this.props.cards.slice(
      this.state.startIdx,
      this.state.endIdx
    );
    // console.log("Cards Cont Props", this.props);

    return (
      <List divided relaxed>
        {cardsList.map(card => {
          return <Card key={card.Id} {...card} />;
        })}
      </List>
    );
  }
}

export default Cards;
