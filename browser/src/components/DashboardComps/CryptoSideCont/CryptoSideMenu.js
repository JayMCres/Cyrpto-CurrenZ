import React from "react";
import { Menu } from "semantic-ui-react";

const SideBarMenu = props => {
  return (
    <Menu>
      <Menu.Item
        name="channels"
        active={props.activeItem === "channels"}
        onClick={props.sideMenuToggle}
      >
        Channels
      </Menu.Item>
      <Menu.Item
        name="direct"
        active={props.activeItem === "direct"}
        onClick={props.sideMenuToggle}
      >
        Direct Message
      </Menu.Item>

      <Menu.Item
        name="favorites"
        active={props.activeItem === "favorites"}
        onClick={props.sideMenuToggle}
      >
        Saved Cryptos
      </Menu.Item>
    </Menu>
  );
};

export default SideBarMenu;
