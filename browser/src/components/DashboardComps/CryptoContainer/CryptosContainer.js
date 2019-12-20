import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import CryptosList from "./CryptosList";
import Search from "./Search";
import LoadingPage from "./LoadingPage";
import io from "socket.io-client";

export default class CryptosContainer extends Component {
  state = {
    coinList: [],
    priorCoinList: [],
    endpoint: "http://localhost:5000",
    inputValue: ""
  };
  getInitialState = () => {
    return {
      status: "disconnected"
    };
  };

  UNSAFE_componentWillMount() {
    this.socket = io("http://localhost:5000");
    this.socket.on("connect", this.connect);
    this.socket.on("disconnect", this.disconnect);
    const { endpoint } = this.state;
    const socket = io(endpoint);
    socket.on("FromAPI", data =>
      this.setState({ coinList: data, priorCoinList: this.state.coinList })
    );
  }

  connect = () => {
    // alert("Connected:" + this.socket.id);
    this.setState({ state: "connected" });
  };

  disconnect = () => {
    // alert("disconnected:" + this.socket.id);
    this.setState({ state: "disconnected" });
  };

  handleChange = event => {
    // console.log("Changing")
    // console.log (event.target.name)
    this.setState({
      inputValue: event.target.value
    });
  };

  filterCryptos = () =>
    this.state.coinList.filter(item => {
      return (
        item.company
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase()) ||
        item.ticker
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase()) ||
        item.market.toLowerCase().includes(this.state.inputValue.toLowerCase())
      );
    });

  render() {
    return (
      <div>
        {this.state.coinList.length === 0 ? (
          // <Segment style={{ maxHeight: 500 }}>
          <LoadingPage />
        ) : (
          <Segment inverted>
            <Segment attached="top">
              <Search
                handleChange={this.handleChange}
                inputValue={this.state.inputValue}
              />
            </Segment>
            <Segment
              inverted
              attached="bottom"
              style={{ overflow: "auto", maxHeight: 1150 }}
            >
              <CryptosList
                coinList={this.filterCryptos()}
                addCryptoToFavorites={this.props.addCryptoToFavorites}
                addFavoriteCryptoPrices={this.props.addFavoriteCryptoPrices}
                addPricesToFavorites={this.props.addPricesToFavorites}
              />
            </Segment>
          </Segment>
        )}
      </div>
    );
  }
}
