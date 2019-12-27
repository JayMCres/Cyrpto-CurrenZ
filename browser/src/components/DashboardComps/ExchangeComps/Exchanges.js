import React, { Component } from "react";
import { Segment, Card } from "semantic-ui-react";
import ExchangeItem from "./ExchangeItem";

export default class Exchanges extends Component {
  state = {
    startIdx: 0,
    endIdx: 10
  };

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.handleExchanges();
    }, 4000);
  };

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 10,
        endIdx: prevState.endIdx + 10
      };
    });
  };

  handleExchanges = () => {
    if (this.state.endIdx === this.props.exchanges.length) {
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
    // console.log("Exchanges Props", this.state);
    const exchangeList = this.props.exchanges.slice(
      this.state.startIdx,
      this.state.endIdx
    );

    return (
      <Card.Group itemsPerRow={10}>
        {exchangeList.map((item, index) => {
          return <ExchangeItem index={index} key={item.id} {...item} />;
        })}
      </Card.Group>
      // </Segment>
    );
  }
}

// export default connect(mapStateToProps)(ExchangeCont);
