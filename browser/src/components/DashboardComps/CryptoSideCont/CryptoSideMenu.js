import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class CryptoSideMenu extends Component {
  handleWatchListRender = async () => {
    await this.props.handleCryptoPriceFetch();
    // await this.props.sideMenuToggle();
  };
  render() {
    const { activeItem } = this.props;
    return (
      <Menu>
        <Menu.Item
          name="messenger"
          active={activeItem === "messenger"}
          onClick={this.props.sideMenuToggle}
        >
          <strong style={{ color: "blue" }}> Messenger</strong>
        </Menu.Item>

        <Menu.Item
          name="watchlist"
          active={activeItem === "watchlist"}
          onClick={this.handleWatchListRender}
        >
          <strong style={{ color: "blue" }}> WatchList</strong>
        </Menu.Item>
      </Menu>
    );
  }
}

export default CryptoSideMenu;
