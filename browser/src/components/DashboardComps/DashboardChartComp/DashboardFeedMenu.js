import React from "react";
import { Menu, Icon } from "semantic-ui-react";

const DashboardFeedMenu = props => {
  return (
    <Menu
      position="right"
      size="mini"
      inverted
      style={{
        "background-color": "black"
      }}
    >
      <Menu.Item
        name="charts"
        active={props.activeItem === "charts"}
        onClick={props.handleItemClick}
        // position="right"
      >
        <Icon name="area chart" />
      </Menu.Item>
      <Menu.Item
        name="feed"
        active={props.activeItem === "feed"}
        onClick={props.handleItemClick}
        // position="right"
      >
        <Icon name="th list" />
      </Menu.Item>

      <Menu.Item
        // position="right"
        name="signup"
        // active={activeItem === "signup"}
        onClick={props.showChartsPage}
      >
        <Icon name="dropdown" />
      </Menu.Item>
    </Menu>
  );
};

export default DashboardFeedMenu;
