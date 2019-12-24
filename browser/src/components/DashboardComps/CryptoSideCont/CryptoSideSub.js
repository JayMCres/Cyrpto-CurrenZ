import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
// import Channels from "../../chatapp/Channels";

// import DirectMessages from "../../chatapp/DirectMessages";
// import Messages from "../../chatapp/Messages";

import SideMessenger from "../../chatapp/SideMessenger";
// import CryptoSideMenu from "./CryptoSideMenu";
// import WatchListCont from "../Favorites/WatchListCont";

class CryptoSideSub extends Component {
  render() {
    // console.log("Side Sub", this.props);
    const { currentChannel, currentUser, isPrivateChannel } = this.props;

    return (
      <SideMessenger
        currentChannel={this.props.currentChannel}
        currentUser={this.props.currentUser}
        isPrivateChannel={this.props.isPrivateChannel}
      />
    );
  }
}

const mapStateToProps = state => ({
  cryptos: state.cryptos.cryptos
});

export default connect(mapStateToProps)(CryptoSideSub);
