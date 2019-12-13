import React from "react";
import { Menu } from "semantic-ui-react";

const SideBarMenu = props => {
  return (
    <Menu>
      <Menu.Item
        name="channels"
        active={props.activeItem === "channels"}
        onClick={props.sideBarMenuToggle}
      >
        Channels
      </Menu.Item>

      <Menu.Item
        name="news"
        active={props.activeItem === "news"}
        onClick={props.sideBarMenuToggle}
      >
        News Feed
      </Menu.Item>
    </Menu>
  );
};

export default SideBarMenu;
