import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Grid } from "semantic-ui-react";
import WidgetChartTicker from "./WidgetChartTicker";
import WidgetTicker from "./WidgetTicker";
import WidgetChart from "./WidgetChart";
import WidgetPrices from "./WidgetPrices";

class WidgetCont extends Component {
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
          "border-color": "blue",
          "border-style": "double"
        }}
      >
        <Segment textAlign="center" attached="top">
          <WidgetTicker />
        </Segment>
        <Segment textAlign="center" attached="middle">
          <WidgetChartTicker />
        </Segment>
        <Grid columns={2} divided>
          <Grid.Column floated="left" width={4}>
            {chartsList.map(item => {
              return <WidgetChart key={item.id} {...item} />;
            })}
          </Grid.Column>
          <Grid.Column floated="left" width={12}>
            <WidgetPrices />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  charts: state.cryptos.charts
});

export default connect(mapStateToProps)(WidgetCont);

// export default WidgetCont;
