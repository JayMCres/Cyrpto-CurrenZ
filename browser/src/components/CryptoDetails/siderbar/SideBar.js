import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import NewsList from "../newsfeed/NewsList";
import Channels from "../../chatapp/Channels";
import SideBarMenu from "./SideBarMenu";

export default class MessageMenu extends Component {
  state = {
    activeItem: "channels"
  };

  sideBarMenuToggle = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    const onSideMenuClick = link => {
      const SIDE_PAGES = {
        news: <NewsList filteredNews={this.props.filteredNews} />,
        channels: (
          <Channels
            currentChannel={this.props.currentChannel}
            currentUser={this.props.currentUser}
            isPrivateChannel={this.props.isPrivateChannel}
          />
        )
      };
      return <div>{SIDE_PAGES[link]}</div>;
    };

    return (
      <div>
        <Segment>
          <SideBarMenu
            activeItem={activeItem}
            sideBarMenuToggle={this.sideBarMenuToggle}
          />
        </Segment>
        <Segment>{onSideMenuClick(activeItem)}</Segment>
      </div>
    );
  }
}
