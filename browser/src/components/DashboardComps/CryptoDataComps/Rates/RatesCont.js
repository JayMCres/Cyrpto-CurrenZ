import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";
import { connect } from "react-redux";

import Rates from "./Rates";

class RatesCont extends Component {
  render() {
    // console.log("Indexess Props", this.props);

    return (
      <Segment
        style={{
          "background-color": "black",
          "border-style": "double",
          "border-color": "blue"
        }}
      >
        {/* <Header as="h4" style={{ color: "#6666ff" }} floated="right" dividing>
          Crypto F/X Rates
        </Header> */}
        <Rates rates={this.props.rates} />
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  rates: state.rates.rates
});

export default connect(mapStateToProps)(RatesCont);
