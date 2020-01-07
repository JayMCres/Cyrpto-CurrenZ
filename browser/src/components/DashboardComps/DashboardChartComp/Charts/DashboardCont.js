import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";
import DashboardChartCont from "./DashboardChartCont";
import { connect } from "react-redux";

class DashboardCont extends Component {
  render() {
    return <DashboardChartCont charts={this.props.charts} />;
  }
}

const mapStateToProps = state => ({
  charts: state.cryptos.charts
});

export default connect(mapStateToProps)(DashboardCont);
