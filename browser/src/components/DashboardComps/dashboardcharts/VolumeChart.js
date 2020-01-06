import React, { Component } from "react";
import {
  Segment,
  Header,
  Image,
  Icon,
  Message,
  Button
} from "semantic-ui-react";
import ReactFC from "react-fusioncharts";
// import { connect } from "react-redux";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Area2d from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Area2d, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configurations

export default class VolumeChart extends Component {
  render() {
    console.log("price chart", this.props);
    const chartConfigs = {
      type: "area2d", // The chart type
      width: "550", // Width of the chart
      height: "200", // Height of the chart
      dataFormat: "json", // Data type
      renderAt: "chartContainer",
      dataSource: {
        // Chart Configuration
        chart: {
          caption: "30 Day Volume",
          captionFontSize: "11",
          captionFontColor: "#6666ff",
          captionFontBold: "1",
          // yAxisName: "US Dollars ($)",
          // numberSuffix: "$",
          theme: "fusion",
          showBorder: "1",
          borderColor: "blue",
          bgColor: "#e6e6ff",
          bgAlpha: "50",
          canvasbgColor: "white",
          canvasbgAlpha: "10",
          canvasBorderColor: "blue",
          canvasBorderThickness: "1",
          showCanvasBorder: "1",
          labelFontColor: "#6666ff",
          labelDisplay: "rotate",
          slantLabel: "1",
          xAxisNameFontColor: "#6666ff",
          yAxisNameFontColor: "#6666ff",
          yAxisValueFontColor: "#6666ff"
        },
        // Chart Data
        data: this.props.data
      }
    };

    return <ReactFC {...chartConfigs} />;
  }
}
