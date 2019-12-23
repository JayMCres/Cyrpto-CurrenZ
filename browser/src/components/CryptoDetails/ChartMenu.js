import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class MenuExampleSecondaryPointing extends Component {
  render() {
    const { activeItem } = this.props;

    return (
      <Menu pointing secondary>
        <Menu.Item
          name="month"
          active={activeItem === "month"}
          onClick={this.props.handleItemClick}
        >
          Month
        </Menu.Item>
        <Menu.Item
          name="threemonth"
          active={activeItem === "threemonth"}
          onClick={this.props.handleItemClick}
        >
          3 Months
        </Menu.Item>
        <Menu.Item
          name="sixmonth"
          active={activeItem === "sixmonth"}
          onClick={this.props.handleItemClick}
        >
          6 Months
        </Menu.Item>
        <Menu.Item
          name="annual"
          active={activeItem === "annual"}
          onClick={this.props.handleItemClick}
        >
          Annual
        </Menu.Item>
      </Menu>
    );
  }
}
