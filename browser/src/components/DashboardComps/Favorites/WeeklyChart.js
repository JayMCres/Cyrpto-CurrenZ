import React, { Component } from "react";
import { Card, Label, Icon, Segment } from "semantic-ui-react";
import Chart from "react-google-charts";

export default class WeeklyChart extends Component {
  render() {
    // console.log("Weekly Chart Props", this.props);
    const options = {
      title: this.props.dayOne.ticker,
      legend: { textStyle: { color: "#00FF00" }, position: "bottom" },
      // backgroundColor: "black",
      backgroundColor: { fill: "transparent" },
      hAxis: {
        textStyle: { color: "#00FF00" }
      },
      vAxis: {
        textStyle: { color: "#00FF00" }
      }
    };

    return (
      <Chart
        // chartType="LineChart",
        chartType="AreaChart"
        width="300px"
        height="200px"
        data={[
          ["Date", "Price"],
          [this.props.dayOne.d, this.props.dayOne.y],
          [this.props.dayTwo.d, this.props.dayTwo.y],
          [this.props.dayThree.d, this.props.dayThree.y],
          [this.props.dayFour.d, this.props.dayFour.y],
          [this.props.dayFive.d, this.props.dayFive.y]
        ]}
        loader={<div>Loading Chart</div>}
        options={options}
        // rows={rows}
        // columns={columns}
      />
    );
  }
}
