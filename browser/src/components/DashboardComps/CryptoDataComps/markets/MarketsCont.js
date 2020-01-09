import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import Markets from "./Markets";

class MarketsCont extends Component {
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
        <Markets markets={this.props.markets} />
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  markets: state.cryptos.markets
});

export default connect(mapStateToProps)(MarketsCont);
