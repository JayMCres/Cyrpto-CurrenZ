import React, { Component } from "react";
import { Segment, Card, List } from "semantic-ui-react";
import ExchangeItem from "./ExchangeItem";

export default class Exchanges extends Component {
  state = {
    startIdx: 0,
    endIdx: 8
  };

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.handleExchanges();
    }, 800);
  };

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 8,
        endIdx: prevState.endIdx + 8
      };
    });
  };

  handleExchanges = () => {
    if (this.state.endIdx === this.props.exchanges.length - 4) {
      this.setState({
        startIdx: 0,
        endIdx: 8
      });
    }
    this.showMore();
  };
  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  render() {
    console.log("Exchanges Props", this.state);
    const exchangeList = this.props.exchanges.slice(
      this.state.startIdx,
      this.state.endIdx
    );

    return (
      <Card.Group itemsPerRow={8}>
        {/* <List divided horizontal size=" 'small'" itemsPerRow={10}> */}
        {exchangeList.map((item, index) => {
          return <ExchangeItem index={index} key={item.id} {...item} />;
        })}
        {/* </List> */}
      </Card.Group>
    );
  }
}

// export default connect(mapStateToProps)(ExchangeCont);
