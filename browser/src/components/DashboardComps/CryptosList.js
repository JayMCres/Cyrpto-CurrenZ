import React, { Component } from "react";
// import { connect } from "react-redux";
import CryptoListItem from "./CryptoListItem";
import { Card } from "semantic-ui-react";

export default class CryptosList extends Component {
  render() {
    // console.log("CryptoList props", this.props);

    return (
      <Card.Group>
        {this.props.coinList.map(crypto => {
          return <CryptoListItem key={crypto.id} {...crypto} />;
        })}
      </Card.Group>
    );
  }
}
