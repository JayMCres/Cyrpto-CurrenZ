import React, { Component } from "react";
import { Segment, Icon, Menu, Header, List } from "semantic-ui-react";
import firebase from "../../config/firebase";

export default class DirectMessages extends Component {
  state = {
    users: [],
    user: null,
    usersRef: firebase.database().ref("users"),
    connectedRef: firebase.database().ref(".info/connected"),
    presenceRef: firebase.database().ref("presence")
  };

  componentDidMount() {
    this.handleUsersSet();
  }

  handleUsersSet = async () => {
    await this.setState({
      user: this.props.currentUser
    });

    if (this.state.user) {
      this.addListeners(this.state.user.uid);
    }
  };

  // prettier-ignore
  addListeners = currentUserUid => {
    let loadedUsers = [];
    this.state.usersRef.on("child_added", snap => {
      if (currentUserUid !== snap.key) {
        let user = snap.val();
        user['uid'] = snap.key;
        user['status'] = "offline";
        loadedUsers.push(user);
        this.setState({  users: loadedUsers });
      }
    });
    this.state.connectedRef.on("value", snap => {
      if (snap.val() === true) {
        const ref = this.state.presenceRef.child(currentUserUid);
        ref.set(true);
        ref.onDisconnect().remove(err => {
          if (err !== null) {
            console.log(err);
          }
        });
      }
    });
    this.state.presenceRef.on("child_added", snap => {
      if (currentUserUid !== snap.key) {
        this.addStatusToUser(snap.key);
      }
    });
    this.state.presenceRef.on("child_removed", snap => {
      if (currentUserUid !== snap.key) {
        this.addStatusToUser(snap.key, false);
      }
    });
  };

  // prettier-ignore
  addStatusToUser = (userId, connected = true) => {
    const updatedUsers = this.state.users.reduce((acc, user) => {
      if (user.uid === userId) {
        user['status'] = `${connected ? 'online' : 'offline'}`;
      }
      return acc.concat(user);
    }, []);
    this.setState({ users: updatedUsers });
  };

  // prettier-ignore
  addStatusToUser = (userId, connected = true) => {
    const updatedUsers = this.state.users.reduce((acc, user) => {
      if (user.uid === userId) {
        user['status'] = `${connected ? 'online' : 'offline'}`;
      }
      return acc.concat(user);
    }, []);
    this.setState({ users: updatedUsers });
  };

  isUserOnline = user => user.status === "online";

  render() {
    const { users } = this.state;
    return (
      <Segment>
        <Header as="h2">
          <span>
            <Icon name="mail" />
            <Header.Content>USERS</Header.Content> ({users.length}){" "}
          </span>
        </Header>
        <Segment style={{ overflow: "auto", maxHeight: 250 }}>
          <List divided relaxed>
            {users.map(user => {
              return (
                <List.Item
                  key={user.uid}
                  // onClick={() => this.changeChannel(user)}
                  // active={channel.id === this.state.activeChannel}
                  style={{ opacity: 0.7, fontStyle: "italic" }}
                >
                  <Icon
                    name="circle"
                    color={this.isUserOnline(user) ? "green" : "red"}
                  />
                  <List.Content>
                    <List.Header as="a">@{user.name}</List.Header>
                  </List.Content>
                  <Icon float="right" name="add" />
                </List.Item>
              );
            })}
          </List>
        </Segment>
      </Segment>
    );
  }
}
