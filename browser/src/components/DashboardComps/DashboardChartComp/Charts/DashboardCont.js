import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardChartCont from "./DashboardChartCont";

class DashboardCont extends Component {
  render() {
    return <DashboardChartCont charts={this.props.charts} />;
  }
}

const mapStateToProps = state => ({
  charts: state.cryptos.charts
});

export default connect(mapStateToProps)(DashboardCont);
