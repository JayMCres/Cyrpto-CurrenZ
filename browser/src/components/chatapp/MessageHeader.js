import React, { Component } from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

export default class MessageHeader extends Component {
  render() {
    return (
      <Segment clearing>
        {/* Channel Title */}
        <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
          <span>{this.props.currentChannel.name}</span>
          <Header.Subheader># of Users</Header.Subheader>
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
