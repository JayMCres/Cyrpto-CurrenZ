import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import NewsList from "../newsfeed/NewsList";
import SideMessenger from "../../chatapp/SideMessenger";
import SideBarMenu from "./SideBarMenu";
// import CryptoSideSub from "../../DashboardComps/CryptoSideCont/CryptoSideSub";

export default class SideBar extends Component {
  state = {
    activeItem: "messages"
  };

  sideBarMenuToggle = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    const onSideMenuClick = link => {
      const SIDE_PAGES = {
        news: <NewsList filteredNews={this.props.filteredNews} />,
        messages: (
          <SideMessenger
            currentChannel={this.props.currentChannel}
            currentUser={this.props.currentUser}
            isPrivateChannel={this.props.isPrivateChannel}
          />
        )
      };
      return (
        <div
          style={{
            "background-color": "black",
            "border-style": "double",
            "border-color": "#6666ff"
          }}
        >
          {SIDE_PAGES[link]}
        </div>
      );
    };

    return (
      <div>
        <Segment
          style={{
            "background-color": "black",
            "border-style": "double",
            "border-color": "#6666ff"
          }}
        >
          <SideBarMenu
            activeItem={activeItem}
            sideBarMenuToggle={this.sideBarMenuToggle}
          />
        </Segment>
        <Segment
          style={{
            "border-style": "double",
            "border-color": "#6666ff",
            "background-color": "#e6e6ff"
          }}
        >
          {onSideMenuClick(activeItem)}
        </Segment>
      </div>
    );
  }
}
