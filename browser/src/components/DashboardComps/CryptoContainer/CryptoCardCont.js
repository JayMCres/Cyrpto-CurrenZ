import React, { Component } from "react";
import { Message, Card } from "semantic-ui-react";
import CryptoCardFront from "./CryptoCardFront";
import CryptoCardBack from "./CryptoCardBack";

export default class CryptoCardCont extends Component {
  state = {
    showCardFront: true
  };

  handleCryptoRenderClick = () => {
    this.props.setCurrentCrypto();
    this.props.fetchCryptoPrices();
    this.props.fetchCryptoDetails();
    this.props.fetchChartPrices();
    this.props.fetchHistoricals();
  };

  handleFavoriteClick = () => {
    this.props.addCryptoToFavorites(this.props.id);
  };

  handleCardFlip = () => {
    this.setState({
      showCardFront: !this.state.showCardFront
    });
  };
  render() {
    console.log("CryptoCardCont", this.props);
    return (
      // <Card onClick={() => this.handleCardFlip()}>
      <Card style={{ "border-style": "none", "background-color": "black" }}>
        {this.state.showCardFront ? (
          <CryptoCardFront
            details={this.props}
            price={this.props.price}
            handleCryptoRenderClick={this.handleCryptoRenderClick}
            handleFavoriteClick={this.handleFavoriteClick}
            handleCardFlip={this.handleCardFlip}
          />
        ) : (
          <CryptoCardBack
            details={this.props}
            price={this.props.price}
            handleCardFlip={this.handleCardFlip}
          />
        )}
      </Card>
    );
  }
}
