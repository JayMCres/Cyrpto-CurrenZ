import React, { Component } from "react";
import { Segment, Header, Message } from "semantic-ui-react";
import { connect } from "react-redux";

import { fetchExchanges } from "../../../actions/cryptos";

import Exchange from "./Exchange";

class ExchangeCont extends Component {
  componentDidMount() {
    this.props.dispatch(fetchExchanges());
  }
  render() {
    // console.log("Exchanges Props", this.props);

    return (
      <Segment inverted color="violet">
        <Message>
          <Header as="h3" textAlign="center" dividing>
            CryptoCurrency Indexes
          </Header>
        </Message>
        <Segment inverted color="grey">
          {this.props.exchanges.map((item, index) => {
            return <Exchange key={index} {...item} />;
          })}
        </Segment>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  exchanges: state.cryptos.exchanges
});

export default connect(mapStateToProps)(ExchangeCont);
