import React, { Component } from "react";
import { Menu, Message } from "semantic-ui-react";

export default class MenuExampleSecondaryPointing extends Component {
  render() {
    const { activeItem } = this.props;

    return (
      <Message
        color="violet"
        style={{
          "border-style": "double",
          "border-color": "#6666ff"
        }}
      >
        <Menu pointing secondary>
          <Menu.Item
            name="month"
            active={activeItem === "month"}
            onClick={this.props.handleItemClick}
          >
            <strong style={{ color: "blue" }}> Month</strong>
          </Menu.Item>
          <Menu.Item
            name="threemonth"
            active={activeItem === "threemonth"}
            onClick={this.props.handleItemClick}
          >
            <strong style={{ color: "blue" }}> 3 Months</strong>
          </Menu.Item>
          <Menu.Item
            name="sixmonth"
            active={activeItem === "sixmonth"}
            onClick={this.props.handleItemClick}
          >
            <strong style={{ color: "blue" }}> 6 Months</strong>
          </Menu.Item>
          <Menu.Item
            name="annual"
            active={activeItem === "annual"}
            onClick={this.props.handleItemClick}
          >
            <strong style={{ color: "blue" }}> Annual</strong>
          </Menu.Item>
        </Menu>
      </Message>
    );
  }
}
