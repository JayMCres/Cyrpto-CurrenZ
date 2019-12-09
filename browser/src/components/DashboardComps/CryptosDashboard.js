import React, { Component } from "react";
import { connect } from "react-redux";

import io from "socket.io-client";
import { fetchCryptos } from "../../actions/Cryptos";

import CryptosList from "./CryptosList";

class CryptosDashboard extends Component {
  state = {
    coinList: [],
    priorCoinList: [],
    indepthPage: false,
    endpoint: "http://localhost:5000",
    inputValue: ""
  };
  getInitialState = () => {
    return {
      status: "disconnected"
    };
  };
  componentWillMount() {
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

  componentDidMount() {
    this.props.dispatch(fetchCryptos());
  }

  render() {
    return <CryptosList coinList={this.state.coinList} />;
  }
}

export default connect(null)(CryptosDashboard);
