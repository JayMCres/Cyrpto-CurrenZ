import React, { Component } from "react";
import { Menu, Icon, Segment, Header } from "semantic-ui-react";

export default class CryptoDataMenu extends Component {
  render() {
    const { activeItem } = this.props;
    return (
      <Menu
        pointing
        secondary
        size="mini"
        fluid
        widths={5}
        style={{
          "background-color": "black"
        }}
      >
        <Menu.Item
          style={{
            color: "#8080ff",
            // "border-style": "ridge",
            // "border-color": "blue",
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
            color: "#8080ff",
            // "border-style": "ridge",
            // "border-color": "blue",
            "text-align": "center"
          }}
          name="rates"
          active={activeItem === "rates"}
          onClick={this.props.handleItemClick}
        >
          <strong>
            <Icon name="globe" />
            Coversion Rates
          </strong>
        </Menu.Item>
        <Menu.Item
          style={{
            color: "#8080ff",
            // "border-style": "ridge",
            // "border-color": "blue",
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
            color: "#8080ff",
            // "border-style": "ridge",
            // "border-color": "blue",
            "text-align": "center"
          }}
          name="volume"
          active={activeItem === "volume"}
          onClick={this.props.handleItemClick}
        >
          <strong>
            <Icon name="credit card" />
            Volume
          </strong>
        </Menu.Item>
        <Menu.Item>
          <Header as="h2" style={{ color: "white" }} floated="right">
            <Icon name="bity" />
            Crypto-Curren-Z
          </Header>
        </Menu.Item>
      </Menu>
    );
  }
}
