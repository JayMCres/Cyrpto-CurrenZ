import React, { Component } from "react";
// import { connect } from "react-redux";
import CryptoListItem from "./CryptoListItem";
import { Card } from "semantic-ui-react";

export default class CryptosList extends Component {
  state = {
    clickedCryptoCard: null
  };

  handleRenderCardBack = cryptoId => {
    const foundCrypto = this.props.coinList.find(crypto => {
      return crypto.id === cryptoId;
    });
    return this.setState({
      clickedCryptoCard: foundCrypto
    });
  };
  render() {
    // console.log("CryptoList props", this.props);

    return (
      <Card.Group centered>
        {this.props.coinList.map(crypto => {
          return (
            <CryptoListItem
              key={crypto.id}
              {...crypto}
              handleRenderCardBack={this.handleRenderCardBack}
              clickedCryptoCard={this.state.clickedCryptoCard}
            />
          );
        })}
      </Card.Group>
    );
  }
}
