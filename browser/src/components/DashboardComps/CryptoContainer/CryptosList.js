import React, { Component } from "react";
import { connect } from "react-redux";
import CryptoListItem from "./CryptoListItem";
import { Card } from "semantic-ui-react";
import {
  fetchCryptoPrices,
  fetchHistoricals,
  setCurrentCrypto,
  fetchCryptoDetails,
  fetchMonthly
} from "../../../actions/cryptos";

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
              fetchCryptoPrices={() =>
                this.props.fetchCryptoPrices(crypto.ticker)
              }
              fetchCryptoDetails={() =>
                this.props.fetchCryptoDetails(crypto.ticker)
              }
              fetchMonthly={() => this.props.fetchMonthly(crypto.ticker)}
              fetchHistoricals={() =>
                this.props.fetchHistoricals(crypto.ticker)
              }
              addCryptoToFavorites={this.props.addCryptoToFavorites}
              addPricesToFavorites={this.props.addPricesToFavorites}
              renderFavoritesCont={this.props.renderFavoritesCont}
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
    fetchCryptoPrices: ticker => dispatch(fetchCryptoPrices(ticker)),
    fetchCryptoDetails: ticker => dispatch(fetchCryptoDetails(ticker)),
    fetchMonthly: ticker => dispatch(fetchMonthly(ticker)),
    fetchHistoricals: ticker => dispatch(fetchHistoricals(ticker))
  };
};
export default connect(null, mapDispatchToProps)(CryptosList);
