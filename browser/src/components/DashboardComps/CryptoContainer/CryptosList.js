import React, { Component } from "react";
import { connect } from "react-redux";
import CryptoListItem from "./CryptoListItem";
import { Card } from "semantic-ui-react";
import { setCurrentCrypto, fetchCryptoDetails } from "../../../actions/cryptos";

class CryptosList extends Component {
  render() {
    // console.log("CryptoList props", this.props);

    return (
      <Card.Group centered>
        {this.props.coinList.map(crypto => {
          return (
            <CryptoListItem
              key={crypto.id}
              {...crypto}
              setCurrentCrypto={() => this.props.setCurrentCrypto(crypto)}
              fetchCryptoDetails={() =>
                this.props.fetchCryptoDetails(crypto.ticker)
              }
            />
          );
        })}
      </Card.Group>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentCrypto: crypto => dispatch(setCurrentCrypto(crypto)),
    fetchCryptoDetails: ticker => dispatch(fetchCryptoDetails(ticker))
  };
};
export default connect(null, mapDispatchToProps)(CryptosList);
