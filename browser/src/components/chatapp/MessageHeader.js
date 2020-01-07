import React, { Component } from "react";
import { Header, Segment, Input } from "semantic-ui-react";

export default class MessageHeader extends Component {
  render() {
    // console.log("MessageHeader", this.props);
    return (
      <Segment
        clearing
        style={{
          "background-color": "black",
          "border-style": "double",
          "border-color": "#6666ff"
        }}
      >
        >{/* Channel Title */}
        <Header
          fluid="true"
          as="h2"
          floated="left"
          style={{ marginBottom: 0, color: "#6666ff" }}
        >
          <span>{this.props.currentChannel.name}</span>
          <Header.Subheader style={{ color: "#6666ff" }}></Header.Subheader>
        </Header>
        {/* Channel Search Input */}
        <Header floated="right">
          <Input
            // loading={searchLoading}
            onChange={this.props.handleSearchChange}
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Messages"
          />
        </Header>
      </Segment>
    );
  }
}
