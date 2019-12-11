import React, { Component } from "react";
import { Segment, Button, Image, Message, List } from "semantic-ui-react";
import firebase from "../../../config/firebase";

export default class UserProfile extends Component {
  render() {
    return (
      <List>
        <List.Item>
          <Image size="mini" src={this.props.currentUser.photoURL} />
          <List.Content>
            <List.Header as="a">
              {this.props.currentUser.displayName}
            </List.Header>
            <List.Description>{this.props.currentUser.email}</List.Description>
          </List.Content>
          <List.Content floated="right">
            <Button size="mini">Sign Out</Button>
          </List.Content>
        </List.Item>
      </List>
    );
  }
}
