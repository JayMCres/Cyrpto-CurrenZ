import React, { Component } from "react";
import { Segment, Icon } from "semantic-ui-react";
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Area2d from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Area2d, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configurations

export default class WeeklyPriceChart extends Component {
  render() {
    // console.log("price chart", this.props);
    const chartConfigs = {
      type: "area2d", // The chart type
      width: "600", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
          caption: "7 Day Price Performance",
          subCaption: "Crypto Price Tracker",
          xAxisName: "Date",
          yAxisName: "US Dollars ($)",
          numberSuffix: "$",
          theme: "carbon"
        },
        // Chart Data
        data: [
          {
            label: this.props.dayOne.d,
            value: this.props.dayOne.y
          },
          {
            label: this.props.dayTwo.d,
            value: this.props.dayTwo.y
          },
          {
            label: this.props.dayThree.d,
            value: this.props.dayThree.y
          },
          {
            label: this.props.dayFour.d,
            value: this.props.dayFour.y
          },
          {
            label: this.props.dayFive.d,
            value: this.props.dayFive.y
          },
          {
            label: this.props.daySix.d,
            value: this.props.daySix.y
          },
          {
            label: this.props.daySeven.d,
            value: this.props.daySeven.y
          }
        ]
      }
    };

    return (
      <div>
        {/* <Segment attached secondary>
          <span>
            <Icon name="dollar sign" /> {this.props.crypto.price}|
            <Icon name="chart area" /> {this.props.crypto.MKTCAP}
          </span>
        </Segment>
        <Segment centered attached="bottom"> */}
        <ReactFC {...chartConfigs} />
        {/* <Message color="violet">{this.props.details.description}</Message> */}
        {/* </Segment> */}
      </div>
    );
  }
}
