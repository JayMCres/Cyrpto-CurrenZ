import React from "react";
import { Menu } from "semantic-ui-react";

const SideBarMenu = props => {
  return (
    <Menu
      style={{
        "background-color": "black",
        "border-style": "double",
        "border-color": "#6666ff"
      }}
    >
      <Menu.Item style={{ "background-color": "#6666ff" }}>
        <img src="https://cdn2.iconfinder.com/data/icons/bitcoin-and-mining/44/trade-512.png" />
      </Menu.Item>
      <Menu.Item
        name="messages"
        active={props.activeItem === "messages"}
        onClick={props.sideBarMenuToggle}
      >
        <strong style={{ color: "#6666ff" }}>Messenger</strong>
      </Menu.Item>

      <Menu.Item
        name="news"
        active={props.activeItem === "news"}
        onClick={props.sideBarMenuToggle}
      >
        <strong style={{ color: "#6666ff" }}>News Feed</strong>
      </Menu.Item>
      <Menu.Item
        name="notes"
        active={props.activeItem === "notes"}
        onClick={props.sideBarMenuToggle}
      >
        <strong style={{ color: "#6666ff" }}>Notes</strong>
      </Menu.Item>
    </Menu>
  );
};

export default SideBarMenu;
