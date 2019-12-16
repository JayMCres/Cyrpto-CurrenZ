import React from "react";
import { Menu } from "semantic-ui-react";

const SideBarMenu = props => {
  return (
    <Menu>
      <Menu.Item
        name="messages"
        active={props.activeItem === "messages"}
        onClick={props.sideBarMenuToggle}
      >
        Messenger
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
