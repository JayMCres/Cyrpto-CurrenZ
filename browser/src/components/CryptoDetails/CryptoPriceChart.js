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

export default class CryptoPriceChart extends Component {
  // state = {
  //   priceData: []
  // };

  // componentWillMount() {
  //   this.setChartData();
  // }

  // setChartData = () => {
  //   this.setState({
  //     priceData: this.props.chartPrices
  //   });
  // };

  render() {
    // console.log("price chart", this.props);
    const chartConfigs = {
      type: "area2d", // The chart type
      width: "100%", // Width of the chart
      height: "600", // Height of the chart
      dataFormat: "json", // Data type
      renderAt: "chartContainer",
      dataSource: {
        // Chart Configuration
        chart: {
          // caption: "30 Day Price Performance",
          subCaption: "Crypto Price Tracker",
          xAxisName: "Date",
          // yAxisName: "US Dollars ($)",
          numberSuffix: "$",
          theme: "fusion"
        },
        // Chart Data
        data: this.props.chartPrices
      }
    };

    return <ReactFC {...chartConfigs} />;
  }
}

// const mapStateToProps = state => ({
//   monthlyPrices: state.cryptos.monthlyPrices
// });

// export default connect(mapStateToProps)(MonthlyPriceChart);
