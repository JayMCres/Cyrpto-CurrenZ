import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
// import Channels from "../../chatapp/Channels";

// import DirectMessages from "../../chatapp/DirectMessages";
// import Messages from "../../chatapp/Messages";

import SideMessenger from "../../chatapp/SideMessenger";
import CryptoSideMenu from "./CryptoSideMenu";
import WatchListCont from "../Favorites/WatchListCont";

class CryptoSideSub extends Component {
  state = {
    activeItem: "messenger",
    favoritesPrices: []
  };

  sideMenuToggle = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  // addPricesToFavorites = async cryptoId => {
  //   const foundCrypto = await this.props.cryptos.find(
  //     item => item.id === cryptoId
  //   );
  //   // console.log("found Crypto", foundCrypto);
  //   const response = await fetch("http://localhost:5000/api/weeklyprices", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ ticker: foundCrypto.ticker })
  //   });
  //   const body = await response.json();
  //   // console.log("favoritesPrices", body);
  //   this.setState({
  //     favoritesPrices: [...this.state.favoritesPrices, body]
  //   });
  // };

  // handleCryptoPriceFetch = async () => {
  //   return await this.props.favorites.map(crypto => {
  //     // console.log(crypto.details.id);
  //     return this.addPricesToFavorites(crypto.details.id);
  //   });
  // };

  render() {
    // console.log("Side Sub", this.props);
    const { currentChannel, currentUser, isPrivateChannel } = this.props;
    const { activeItem } = this.state;
    const onSideMenuClick = link => {
      const SIDE_PAGES = {
        messenger: (
          <SideMessenger
            currentChannel={this.props.currentChannel}
            currentUser={this.props.currentUser}
            isPrivateChannel={this.props.isPrivateChannel}
          />
        ),
        watchlist: (
          <WatchListCont
          // favoritesPrices={this.state.favoritesPrices}
          // favorites={this.props.favorites}
          />
        )
      };
      return <div>{SIDE_PAGES[link]}</div>;
    };
    return (
      <Segment>
        {/* <CryptoSideMenu
          activeItem={activeItem}
          sideMenuToggle={this.sideMenuToggle}
          // handleCryptoPriceFetch={this.handleCryptoPriceFetch}
          // favoritesPrices={this.state.favoritesPrices}
        /> */}
        {/* {onSideMenuClick(activeItem)} */}
        <SideMessenger
          currentChannel={this.props.currentChannel}
          currentUser={this.props.currentUser}
          isPrivateChannel={this.props.isPrivateChannel}
        />
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  cryptos: state.cryptos.cryptos
});

export default connect(mapStateToProps)(CryptoSideSub);
