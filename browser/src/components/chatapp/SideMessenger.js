import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

import Channels from "./Channels";

import DirectMessages from "./DirectMessages";
import Messages from "./Messages";

export default class SideMessenger extends Component {
  state = {
    // activeItem: "channels",
    showConvo: true
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
      <Segment style={{ "background-color": "black" }}>
        <Segment style={{ "background-color": "black" }}>
          <DirectMessages
            currentChannel={this.props.currentChannel}
            currentUser={this.props.currentUser}
            isPrivateChannel={this.props.isPrivateChannel}
            renderChannelConvo={this.renderChannelConvo}
          />

          <Channels
            currentChannel={this.props.currentChannel}
            currentUser={this.props.currentUser}
            isPrivateChannel={this.props.isPrivateChannel}
            renderChannelConvo={this.renderChannelConvo}
          />
        </Segment>
        {currentChannel === null || this.state.showConvo === false ? (
          <div></div>
        ) : (
          <Messages
            key={currentChannel && currentChannel.id}
            currentChannel={currentChannel}
            currentUser={currentUser}
            hideChannelConvo={this.hideChannelConvo}
            isPrivateChannel={isPrivateChannel}
          />
        )}
      </Segment>
    );
  }
}
