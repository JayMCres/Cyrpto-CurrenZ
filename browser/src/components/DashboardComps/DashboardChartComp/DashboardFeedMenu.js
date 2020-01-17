import React from "react";
import { Menu, Icon } from "semantic-ui-react";

const DashboardFeedMenu = props => {
  return (
    <Menu
      compact
      icon="labeled"
      vertical
      size="mini"
      inverted
      style={{
        "background-color": "black"
      }}
    >
      <Menu.Item
        style={{
          "border-color": "#6666ff",
          "border-style": "solid",
          "border-width": "1px"
        }}
        name="charts"
        active={props.activeItem === "charts"}
        onClick={props.handleItemClick}
      >
        <Icon name="area chart" size="tiny" />
      </Menu.Item>
      <Menu.Item
        style={{
          "border-color": "#6666ff",
          "border-style": "solid",
          "border-width": "1px"
        }}
        name="feed"
        active={props.activeItem === "feed"}
        onClick={props.handleItemClick}
      >
        <Icon name="th list" size="tiny" />
      </Menu.Item>

      <Menu.Item
        style={{
          "border-color": "#6666ff",
          "border-style": "solid",
          "border-width": "1px"
        }}
        name="widget"
        active={props.activeItem === "widget"}
        onClick={props.handleItemClick}
      >
        <Icon name="bitcoin" size="tiny" />
      </Menu.Item>
    </Menu>
  );
};

export default DashboardFeedMenu;
