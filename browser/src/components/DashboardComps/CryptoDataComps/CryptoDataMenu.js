import React, { Component } from "react";
import { Menu, Icon, Segment } from "semantic-ui-react";

export default class CryptoDataMenu extends Component {
  render() {
    const { activeItem } = this.props;
    return (
      <Menu
        inverted
        pointing
        secondary
        style={{
          "background-color": "black"

          // "border-style": "double",
          // "border-color": "blue"
        }}
      >
        <Menu.Item
          style={{
            color: "blue",
            "border-style": "ridge",
            "border-color": "blue",
            "text-align": "center"
          }}
          name="exchanges"
          active={activeItem === "exchanges"}
          onClick={this.props.handleItemClick}
        >
          <strong>
            <Icon name="exchange" />
            Crypto Indexes
          </strong>
        </Menu.Item>
        <Menu.Item
          style={{
            color: "blue",
            "border-style": "ridge",
            "border-color": "blue",
            "text-align": "center"
          }}
          name="rates"
          active={activeItem === "rates"}
          onClick={this.props.handleItemClick}
        >
          <strong>
            <Icon name="money bill alternate outline" />
            Coversion Rates
          </strong>
        </Menu.Item>
        <Menu.Item
          style={{
            color: "blue",
            "border-style": "ridge",
            "border-color": "blue",
            "text-align": "center"
          }}
          name="market"
          active={activeItem === "market"}
          onClick={this.props.handleItemClick}
        >
          <strong>
            <Icon name="money bill alternate outline" />
            Market Cap
          </strong>
        </Menu.Item>
        <Menu.Item
          style={{
            color: "blue",
            "border-style": "ridge",
            "border-color": "blue",
            "text-align": "center"
          }}
          name="volume"
          active={activeItem === "volume"}
          onClick={this.props.handleItemClick}
        >
          <strong>
            <Icon name="money bill alternate outline" />
            Volume
          </strong>
        </Menu.Item>
      </Menu>
    );
  }
}
