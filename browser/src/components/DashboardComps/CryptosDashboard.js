import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Grid, Message, Header, Icon } from "semantic-ui-react";
// import io from "socket.io-client";
import { fetchNews, fetchCryptos } from "../../actions/cryptos";

import CryptosContainer from "./CryptoContainer/CryptosContainer";
import FavoritesMainCont from "./Favorites/FavoritesMainCont";

import CryptoDataCont from "./CryptoDataComps/CryptoDataCont";
import CryptoSideCont from "./CryptoSideCont/CryptoSideCont";
import CryptoSideSub from "./CryptoSideCont/CryptoSideSub";
import CryptoDetailsCont from "../CryptoDetails/CryptoDetailsCont";

class CryptosDashboard extends Component {
  state = {
    indepthPage: false,
    favorites: [],
    favoritesPrices: [],
    response: "",
    post: ""
  };

  async componentDidMount() {
    this.props.dispatch(fetchCryptos());
    this.props.dispatch(fetchNews());
    this.addListeners();
  }

  showIndepthPage = () => {
    return this.setState({
      indepthPage: !this.state.indepthPage
    });
  };

  addListeners = () => {
    let loadedFavorites = [];
    this.props.favoritesRef.on("child_added", snap => {
      loadedFavorites.push(snap.val());
      // console.log(loadedChannels);
      // this.setState({ channels: loadedChannels });
      this.setState({
        favorites: loadedFavorites
      });
    });
  };

  addCryptoToFavorites = cryptoId => {
    const userId = this.props.currentUser.uid;
    // console.log("User", userId);
    const foundCrypto = this.props.cryptos.find(item => item.id === cryptoId);
    // console.log("foundCrypto", foundCrypto);
    const preventDoubles = this.state.favorites.find(
      item => item.details.id === cryptoId
    );

    // console.log("preventDoubles", preventDoubles);
    if (!preventDoubles) {
      // this.saveNewFavorite(foundCrypto);

      const key = this.props.favoritesRef.push().key;

      const newFavorite = {
        id: key,
        userId: userId,
        details: foundCrypto
      };

      this.props.favoritesRef
        .child(key)
        .update(newFavorite)
        .then(newFavorite => this.addNewItemToFavorites(newFavorite))
        .catch(err => {
          console.error(err);
        });
    }
  };

  addNewItemToFavorites = async newFav => {
    // console.log("new fav", newFav);
    await this.setState({
      favorites: [...this.state.favorites, newFav]
    });

    await this.addListeners();
  };

  addPricesToFavorites = async cryptoId => {
    const foundCrypto = this.props.cryptos.find(item => item.id === cryptoId);
    // console.log("found Crypto", foundCrypto);
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
    await this.handlePriceClear();
    await this.state.favorites.map(crypto => {
      // console.log(crypto.details.id);
      return this.addPricesToFavorites(crypto.details.id);
    });
  };

  handlePriceClear = () => {
    this.setState({
      favoritesPrices: []
    });
  };

  removeCryptoFromFavorites = async cryptoId => {
    const deleteCrypto = this.state.favorites.find(
      item => item.details.id === cryptoId
    );
    this.props.favoritesRef.child(deleteCrypto.id).remove();
    // console.log("deleteCrypto", deleteCrypto);
    const updateCrypto = this.state.favorites.filter(item => {
      return item.id !== cryptoId;
    });

    if (deleteCrypto && this.state.favorites.length > 1) {
      await this.setState({
        favorites: updateCrypto
      });
      await this.addListeners();
    } else {
      await this.setState({
        favorites: []
      });
      await this.addListeners();
    }
  };

  clearFavorites = () => {
    this.setState({
      favorites: []
    });
  };

  render() {
    const { currentChannel, isPrivateChannel } = this.props;
    // console.log("Dashboard", this.state);
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        {/* <Segment style={{ "background-color": "black" }}> */}

        <CryptoDataCont />
        {/* </Segment> */}
        {this.state.favorites.length === 0 ||
        this.props.cryptos.length === 0 ? (
          <Message></Message>
        ) : (
          <FavoritesMainCont
            handlePriceClear={this.handlePriceClear}
            showIndepthPage={this.showIndepthPage}
            favorites={this.state.favorites}
            removeCryptoFromFavorites={this.removeCryptoFromFavorites}
            handleCryptoPriceFetch={this.handleCryptoPriceFetch}
            favoritesPrices={this.state.favoritesPrices}
            addPriceListeners={this.addPriceListeners}
            handlePriceFetchUpdate={this.handlePriceFetchUpdate}
            addPricesToFavorites={this.addPricesToFavorites}
          />
        )}
        {!this.state.indepthPage ? (
          <Grid
            columns={2}
            divided
            style={{
              "background-color": "black"
            }}
          >
            <Grid.Column
              width={10}
              style={{
                "background-color": "black"
              }}
            >
              <CryptosContainer
                addCryptoToFavorites={this.addCryptoToFavorites}
                addFavoriteCryptoPrices={this.addFavoriteCryptoPrices}
                addPricesToFavorites={this.addPricesToFavorites}
              />
            </Grid.Column>
            <Grid.Column
              width={6}
              style={{
                "background-color": "black"
              }}
            >
              <CryptoSideCont
                currentUser={this.props.currentUser}
                showIndepthPage={this.showIndepthPage}
                clearFavorites={this.clearFavorites}
              />
              <Segment
                style={{
                  "background-color": "black",
                  "border-style": "double",
                  "border-color": "#6666ff"
                }}
              >
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
          <Segment style={{ "background-color": "black" }}>
            <CryptoDetailsCont
              showIndepthPage={this.showIndepthPage}
              currentChannel={currentChannel}
              currentUser={this.props.currentUser}
              isPrivateChannel={isPrivateChannel}
              clearFavorites={this.clearFavorites}
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
