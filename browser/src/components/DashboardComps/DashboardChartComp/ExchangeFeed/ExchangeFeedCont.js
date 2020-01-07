import React, { Component } from "react";

import { connect } from "react-redux";
import ExchangeFeeds from "./ExchangeFeeds";

class ExchangeFeedCont extends Component {
  render() {
    return <ExchangeFeeds exchanges={this.props.exchangeFeed} />;
  }
}

const mapStateToProps = state => ({
  exchangeFeed: state.exchanges.exchangeFeed
});

export default connect(mapStateToProps)(ExchangeFeedCont);
