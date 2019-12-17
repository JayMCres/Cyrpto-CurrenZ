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
