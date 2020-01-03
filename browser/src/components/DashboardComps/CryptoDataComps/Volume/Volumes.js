import React, { Component } from "react";
import { Segment, Card, List } from "semantic-ui-react";
import Volume from "./Volume";

export default class Volumes extends Component {
  state = {
    startIdx: 0,
    endIdx: 5
  };

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.handleVolumes();
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

  handleVolumes = () => {
    if (this.state.endIdx === this.props.volumeData.length) {
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
    console.log("Volume Props", this.props);
    const volumeList = this.props.volumeData.slice(
      this.state.startIdx,
      this.state.endIdx
    );

    return (
      <Card.Group itemsPerRow={5}>
        {volumeList.map((item, index) => {
          return <Volume index={index} key={item.ticker} {...item} />;
        })}
      </Card.Group>
    );
  }
}
