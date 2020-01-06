import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";
import DashboardChartCont from "./DashboardChartCont";
import { connect } from "react-redux";

class DashboardCont extends Component {
  render() {
    // console.log("Exchanges Cont Props", this.props);
    return (
      <DashboardChartCont
        charts={this.props.charts}
        // exchanges={this.props.exchangesList.filter((item, index) => {
        //   return index > 157;
        // })}
      />
    );
  }
}

const mapStateToProps = state => ({
  charts: state.cryptos.charts
});

export default connect(mapStateToProps)(DashboardCont);
