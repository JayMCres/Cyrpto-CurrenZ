import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

import Channels from "../../chatapp/Channels";
import CryptoSideMenu from "./CryptoSideMenu";
import FavoritesList from "../Favorites/FavoritesList";
import DirectMessages from "../../directmessage/DirectMessages";

export default class MessageMenu extends Component {
  state = {
    activeItem: "channels"
  };

  sideMenuToggle = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    const onSideMenuClick = link => {
      const SIDE_PAGES = {
        favoities: <FavoritesList />,
        channels: (
          <Channels
            currentChannel={this.props.currentChannel}
            currentUser={this.props.currentUser}
            isPrivateChannel={this.props.isPrivateChannel}
          />
        ),
        direct: <DirectMessages currentUser={this.props.currentUser} />
      };
      return <div>{SIDE_PAGES[link]}</div>;
    };

    return (
      <div>
        <Segment>
          <CryptoSideMenu
            activeItem={activeItem}
            sideMenuToggle={this.sideMenuToggle}
          />
          {onSideMenuClick(activeItem)}
        </Segment>
      </div>
    );
  }
}
