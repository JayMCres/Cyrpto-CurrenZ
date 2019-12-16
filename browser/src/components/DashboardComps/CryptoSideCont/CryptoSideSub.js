import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

import Channels from "../../chatapp/Channels";

import DirectMessages from "../../chatapp/DirectMessages";
import Messages from "../../chatapp/Messages";

export default class CryptoSideSub extends Component {
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
