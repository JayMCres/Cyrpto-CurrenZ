import React, { Component } from "react";
import { Segment, Button, Image, Message, List } from "semantic-ui-react";
import firebase from "../../../config/firebase";

export default class UserProfile extends Component {
  refreshPage = () => {
    window.location.reload(false);
  };
  handleSignout = async () => {
    await this.props.clearFavorites();
    await firebase
      .auth()
      .signOut()
      .then(() => console.log("signed out!"));
    await this.refreshPage();
  };
  render() {
    return (
      <List>
        <List.Item>
          <Image size="mini" src={this.props.currentUser.photoURL} />
          <List.Content>
            <List.Header style={{ color: "navy" }}>
              {this.props.currentUser.displayName}
            </List.Header>
            <List.Description>{this.props.currentUser.email}</List.Description>
          </List.Content>
          <List.Content floated="right">
            <Button
              size="mini"
              inverted
              color="violet"
              onClick={this.handleSignout}
            >
              Sign Out
            </Button>
          </List.Content>
        </List.Item>
      </List>
    );
  }
}
