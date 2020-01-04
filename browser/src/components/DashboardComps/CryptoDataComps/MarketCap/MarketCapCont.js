import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import MarketCaps from "./MarketCaps";

class MarketCapCont extends Component {
  render() {
    // console.log("Market Cap Cont Props", this.props);
    return (
      <Segment
        style={{
          "background-color": "black",
          "border-style": "double",
          "border-color": "blue"
        }}
      >
        {/* <Header as="h4" style={{ color: "#6666ff" }} floated="right" dividing>
        Crypto Exchanges
      </Header> */}
        <MarketCaps
          marketData={this.props.marketData.map(item => {
            const cap = item[1] / 1000000000;
            return {
              ticker: item[0].toUpperCase(),
              data: cap.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })
            };
          })}
        />
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  marketData: state.global.marketData[0]
});

export default connect(mapStateToProps)(MarketCapCont);
