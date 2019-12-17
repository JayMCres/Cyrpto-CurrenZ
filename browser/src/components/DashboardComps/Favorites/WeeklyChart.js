import React, { Component } from "react";
import { Segment, Message } from "semantic-ui-react";
import Chart from "react-google-charts";

export default class WeeklyChart extends Component {
  render() {
    console.log("Weekly Chart Props", this.props);
    const options = {
      title: "Weekly Price Performance",
      legend: { textStyle: { color: "#00FF00" }, position: "bottom" },
      backgroundColor: "black",
      hAxis: {
        textStyle: { color: "#00FF00" }
      },
      vAxis: {
        textStyle: { color: "#00FF00" }
      }
    };

    return (
      <Message>
        <Chart
          // chartType="LineChart",
          chartType="AreaChart"
          width="100%"
          height="400px"
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
      </Message>
    );
  }
}
