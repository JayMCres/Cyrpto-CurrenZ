import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import Exchanges from "./Exchanges";

class ExchangeCont extends Component {
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
