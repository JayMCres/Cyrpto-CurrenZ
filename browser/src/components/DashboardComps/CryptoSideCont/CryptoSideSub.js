import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

import Channels from "../../chatapp/Channels";
// import CryptoSideMenu from "./CryptoSideMenu";
import FavoritesList from "../Favorites/FavoritesList";
import DirectMessages from "../../chatapp/DirectMessages";
import Messages from "../../chatapp/Messages";

export default class MessageMenu extends Component {
  state = {
    activeItem: "channels",
    showConvo: true
  };

  sideMenuToggle = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  renderChannelConvo = () => {
    this.setState({ showConvo: true });
  };

  hideChannelConvo = () => {
    this.setState({ showConvo: false });
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
        direct: (
          <DirectMessages
            currentChannel={this.props.currentChannel}
            currentUser={this.props.currentUser}
            isPrivateChannel={this.props.isPrivateChannel}
          />
        )
      };
      return <div>{SIDE_PAGES[link]}</div>;
    };
    const { currentChannel, currentUser, isPrivateChannel } = this.props;
    return (
      <div>
        <Segment>
          <DirectMessages
            currentChannel={this.props.currentChannel}
            currentUser={this.props.currentUser}
            isPrivateChannel={this.props.isPrivateChannel}
          />
          <Channels
            currentChannel={this.props.currentChannel}
            currentUser={this.props.currentUser}
            isPrivateChannel={this.props.isPrivateChannel}
            renderChannelConvo={this.renderChannelConvo}
          />
          {currentChannel === null || this.state.showConvo === false ? (
            <div> </div>
          ) : (
            <Messages
              key={currentChannel && currentChannel.id}
              currentChannel={currentChannel}
              currentUser={currentUser}
              hideChannelConvo={this.hideChannelConvo}
              isPrivateChannel={isPrivateChannel}
            />
          )}

          {/* <CryptoSideMenu
            activeItem={activeItem}
            sideMenuToggle={this.sideMenuToggle}
          />
          {onSideMenuClick(activeItem)} */}
        </Segment>
      </div>
    );
  }
}
