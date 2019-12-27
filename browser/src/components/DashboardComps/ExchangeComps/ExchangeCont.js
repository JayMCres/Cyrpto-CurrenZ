import React, { Component } from "react";
import { Segment, List, Card } from "semantic-ui-react";
import { connect } from "react-redux";

import { fetchExchanges } from "../../../actions/cryptos";

import Exchanges from "./Exchanges";

class ExchangeCont extends Component {
  componentDidMount() {
    this.props.dispatch(fetchExchanges());
  }
  render() {
    // console.log("Exchanges Props", this.props);

    return (
      <Segment
        style={{
          "background-color": "black",
          "border-style": "double",
          "border-color": "blue"
        }}
      >
        <Exchanges exchanges={this.props.exchanges} />
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  exchanges: state.cryptos.exchanges
});

export default connect(mapStateToProps)(ExchangeCont);
