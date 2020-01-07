import React, { Component } from "react";
import DashboardCharts from "./DashboardCharts";

import { Segment } from "semantic-ui-react";

class DashboardChartCont extends Component {
  state = {
    startIdx: 0,
    endIdx: 1
  };

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.handleCharts();
    }, 8000);
  };

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 1,
        endIdx: prevState.endIdx + 1
      };
    });
  };

  handleCharts = () => {
    if (this.state.endIdx === this.props.charts.length - 1) {
      this.setState({
        startIdx: 0,
        endIdx: 1
      });
    }
    this.showMore();
  };
  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  render() {
    const chartsList = this.props.charts.slice(
      this.state.startIdx,
      this.state.endIdx
    );

    return (
      <Segment
        style={{
          "background-color": "black",
          "border-style": "double",
          "border-color": "#6666ff"
        }}
      >
        {chartsList.map(item => {
          return <DashboardCharts key={item.id} {...item} />;
        })}
      </Segment>
    );
  }
}

export default DashboardChartCont;
