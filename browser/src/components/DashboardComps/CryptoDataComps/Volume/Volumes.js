import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Volume from "./Volume";

export default class Volumes extends Component {
  state = {
    startIdx: 0,
    endIdx: 8
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
        startIdx: prevState.startIdx + 8,
        endIdx: prevState.endIdx + 8
      };
    });
  };

  handleVolumes = () => {
    if (this.state.endIdx === this.props.volumeData.length + 1) {
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
    // console.log("Volume Props", this.props);
    const volumeList = this.props.volumeData.slice(
      this.state.startIdx,
      this.state.endIdx
    );

    return (
      <Card.Group itemsPerRow={8} centered>
        {volumeList.map((item, index) => {
          return <Volume index={index} key={item.ticker} {...item} />;
        })}
      </Card.Group>
    );
  }
}
