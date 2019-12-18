import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Grid } from "semantic-ui-react";
import io from "socket.io-client";
import { fetchNews, fetchCryptos } from "../../actions/cryptos";

import CryptosList from "./CryptoContainer/CryptosList";
import FavoritesCont from "./Favorites/FavoritesCont";
import LoadingPage from "./CryptoContainer/LoadingPage";
import Search from "./CryptoContainer/Search";
import Exchanges from "./ExchangeComps/ExchangeCont";
import CryptoSideCont from "./CryptoSideCont/CryptoSideCont";
import CryptoSideSub from "./CryptoSideCont/CryptoSideSub";
import CryptoDetailsCont from "../CryptoDetails/CryptoDetailsCont";
import firebase from "../../config/firebase";

class CryptosDashboard extends Component {
  state = {
    coinList: [],
    priorCoinList: [],
    indepthPage: false,
    endpoint: "http://localhost:5000",
    inputValue: "",
    favorites: [],
    favoritesRef: firebase.database().ref("favorites"),
    favoritesPrices: [],
    response: "",
    post: ""
  };
  getInitialState = () => {
    return {
      status: "disconnected"
    };
  };

  componentDidMount() {
    this.props.dispatch(fetchNews());
    this.props.dispatch(fetchCryptos());
    this.addListeners();
  }
  componentWillMount() {
    this.socket = io("http://localhost:5000");
    this.socket.on("connect", this.connect);
    // this.socket.on("disconnect", this.disconnect);
    const { endpoint } = this.state;
    const socket = io(endpoint);
    socket.on("FromAPI", data =>
      this.setState({ coinList: data, priorCoinList: this.state.coinList })
    );
  }

  componentDidUnmount() {
    this.socket.on("disconnect", this.disconnect);
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

  addListeners = () => {
    let loadedFavorites = [];
    this.state.favoritesRef.on("child_added", snap => {
      loadedFavorites.push(snap.val());
      // console.log(loadedChannels);
      // this.setState({ channels: loadedChannels });
      this.setState({ favorites: loadedFavorites });
      // this.addNotificationListener(snap.key);
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

  addCryptoToFavorites = cryptoId => {
    const userId = this.props.currentUser.uid;
    // console.log("User", userId);
    const foundCrypto = this.state.coinList.find(item => item.id === cryptoId);
    // console.log("foundCrypto", foundCrypto);
    const preventDoubles = this.state.favorites.find(
      item => item.details.id === cryptoId
    );

    // console.log("preventDoubles", preventDoubles);
    if (!preventDoubles) {
      // this.saveNewFavorite(foundCrypto);

      const key = this.state.favoritesRef.push().key;

      const newFavorite = {
        id: key,
        userId: userId,
        details: foundCrypto
      };

      this.state.favoritesRef
        .child(key)
        .update(newFavorite)
        .then(newFavorite => this.addNewItemToFavorites(newFavorite))
        .catch(err => {
          console.error(err);
        });
    }
  };

  addPricesToFavorites = async cryptoId => {
    const foundCrypto = this.props.cryptos.find(item => item.id === cryptoId);
    console.log("found Crypto", foundCrypto);
    const preventDoubles = this.state.favoritesPrices.find(
      item => item.ticker === foundCrypto.ticker
    );
    if (!preventDoubles) {
      const response = await fetch("http://localhost:5000/api/weeklyprices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          foundCrypto
          // ticker: foundCrypto.ticker,
          // id: foundCrypto.id
        })
      });
      const body = await response.json();
      // console.log("favoritesPrices", body);
      this.setState({
        favoritesPrices: [...this.state.favoritesPrices, body]
      });
    }
  };

  handleCryptoPriceFetch = async () => {
    return await this.state.favorites.map(crypto => {
      // console.log(crypto.details.id);
      return this.addPricesToFavorites(crypto.details.id);
    });
  };

  addNewItemToFavorites = async newFav => {
    // console.log("new fav", newFav);
    await this.setState({
      favorites: [...this.state.favorites, newFav]
    });
    await this.addListeners();
    // this.renderFavoritesCont();
  };

  removeCryptoFromFavorites = cryptoId => {
    const deleteCrypto = this.state.favorites.find(
      item => item.id === cryptoId
    );

    const updateCrypto = this.state.favorites.filter(item => {
      return item.id !== cryptoId;
    });
    if (deleteCrypto) {
      // console.log("deleteCrypto", deleteCrypto);
      this.setState({
        favorites: updateCrypto
      });
    }
    this.state.favoritesRef.child(deleteCrypto.id).remove();

    // this.addListeners();
  };

  render() {
    const { currentChannel, isPrivateChannel } = this.props;
    console.log("Dashboard", this.state);
    return (
      <Segment inverted>
        {this.state.favorites.length === 0 ||
        this.props.cryptos.length === 0 ? (
          <Exchanges />
        ) : (
          <Segment>
            <Exchanges />
            <FavoritesCont
              showIndepthPage={this.showIndepthPage}
              favorites={this.state.favorites}
              removeCryptoFromFavorites={this.removeCryptoFromFavorites}
              handleCryptoPriceFetch={this.handleCryptoPriceFetch}
              favoritesPrices={this.state.favoritesPrices}
            />
          </Segment>
        )}
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
                    style={{ overflow: "auto", maxHeight: 1150 }}
                  >
                    <CryptosList
                      coinList={this.filterCryptos()}
                      addCryptoToFavorites={this.addCryptoToFavorites}
                      addFavoriteCryptoPrices={this.addFavoriteCryptoPrices}
                      addPricesToFavorites={this.addPricesToFavorites}
                    />
                  </Segment>
                </Segment>
              )}
            </Grid.Column>
            <Grid.Column width={6}>
              <CryptoSideCont
                currentUser={this.props.currentUser}
                showIndepthPage={this.showIndepthPage}
              />
              <Segment style={{ "border-style": "inset" }}>
                <CryptoSideSub
                  currentChannel={currentChannel}
                  currentUser={this.props.currentUser}
                  isPrivateChannel={isPrivateChannel}
                  favorites={this.state.favorites}
                  addPricesToFavorites={this.addPricesToFavorites}
                  favoritesPrices={this.state.favoritesPrices}
                />
              </Segment>
            </Grid.Column>
          </Grid>
        ) : (
          <Segment inverted>
            <CryptoDetailsCont
              showIndepthPage={this.showIndepthPage}
              currentChannel={currentChannel}
              currentUser={this.props.currentUser}
              isPrivateChannel={isPrivateChannel}
            />
          </Segment>
        )}
      </Segment>
    );
  }
}
const mapStateToProps = state => ({
  currentChannel: state.channels.currentChannel,
  isPrivateChannel: state.channels.isPrivateChannel,
  cryptos: state.cryptos.cryptos
});

export default connect(mapStateToProps)(CryptosDashboard);
