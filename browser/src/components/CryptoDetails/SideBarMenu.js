import React, { Component } from "react";
import { Menu, Table, Segment, Message } from "semantic-ui-react";
import NewsList from "./newsfeed/NewsList";
import Channels from "../chatapp/Channels";

export default class MessageMenu extends Component {
  state = {
    activeItem: "channels"
  };

  messageToggle = (e, { name }) => {
    console.log("tabling", name);
    this.setState({ activeItem: name });
  };

  renderToggle = () => {
    if (this.state.activeItem === "news") {
      return <NewsList filteredNews={this.props.filteredNews} />;
    } else {
      return (
        <Channels
          currentChannel={this.props.currentChannel}
          currentUser={this.props.currentUser}
          isPrivateChannel={this.props.isPrivateChannel}
        />
      );
    }
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu>
          <Menu.Item
            name="channels"
            active={activeItem === "channels"}
            onClick={this.messageToggle}
          >
            Channels
          </Menu.Item>

          <Menu.Item
            name="news"
            active={activeItem === "news"}
            onClick={this.messageToggle}
          >
            News Feed
          </Menu.Item>
        </Menu>
        <Segment>{this.renderToggle()}</Segment>
      </div>
    );
  }
}
