import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Grid } from "semantic-ui-react";
import io from "socket.io-client";
import { fetchNews } from "../../actions/cryptos";

import CryptosList from "./CryptoContainer/CryptosList";
import LoadingPage from "./CryptoContainer/LoadingPage";
import Search from "./CryptoContainer/Search";
import Exchanges from "./ExchangeComps/ExchangeCont";
import CryptoSideCont from "./CryptoSideCont/CryptoSideCont";
import Channels from "../chatapp/Channels";
import CryptoDetailsCont from "../CryptoDetails/CryptoDetailsCont";

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

  componentDidMount() {
    this.props.dispatch(fetchNews());
  }
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
  showIndepthPage = () => {
    return this.setState({
      indepthPage: !this.state.indepthPage
    });
  };
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
    const { currentChannel, isPrivateChannel } = this.props;
    return (
      <Segment inverted>
        <Exchanges />
        {!this.state.indepthPage ? (
          <Grid columns={2} divided>
            <Grid.Column width={10}>
              {this.state.coinList.length === 0 ? (
                // <Segment style={{ maxHeight: 500 }}>
                <LoadingPage />
              ) : (
                // </Segment>
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
                    style={{ overflow: "auto", maxHeight: 950 }}
                  >
                    <CryptosList coinList={this.filterCryptos()} />
                  </Segment>
                </Segment>
              )}
            </Grid.Column>
            <Grid.Column width={6}>
              <CryptoSideCont
                currentUser={this.props.currentUser}
                showIndepthPage={this.showIndepthPage}
              />
              <Segment inverted>
                <Channels
                  currentChannel={currentChannel}
                  currentUser={this.props.currentUser}
                  isPrivateChannel={isPrivateChannel}
                />
              </Segment>
            </Grid.Column>
          </Grid>
        ) : (
          <Segment inverted>
            <CryptoDetailsCont />
          </Segment>
        )}
      </Segment>
    );
  }
}
const mapStateToProps = state => ({
  currentChannel: state.channels.currentChannel,
  isPrivateChannel: state.channels.isPrivateChannel
});

export default connect(mapStateToProps)(CryptosDashboard);
