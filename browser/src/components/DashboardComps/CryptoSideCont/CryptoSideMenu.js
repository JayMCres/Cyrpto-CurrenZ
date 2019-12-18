import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class CryptoSideMenu extends Component {
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
          name="charts"
          active={activeItem === "charts"}
          // onClick={() => this.props.handleCryptoPriceFetch()}
          // disabled={this.props.favoritesPrices.length !== 0}
          style={{ color: "blue" }}
        >
          Render Watchlist
        </Menu.Item>
        <Menu.Item
          name="watchlist"
          active={activeItem === "watchlist"}
          onClick={this.props.sideMenuToggle}
          // disabled={this.props.favoritesPrices.length === 0}
          style={{ color: "blue" }}
        >
          Watchlist
        </Menu.Item>
      </Menu>
    );
  }
}

export default CryptoSideMenu;
