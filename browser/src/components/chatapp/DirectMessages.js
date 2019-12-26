import React, { Component } from "react";
import { Segment, Icon, Menu, Header, List } from "semantic-ui-react";
import firebase from "../../config/firebase";
import { connect } from "react-redux";
import { setCurrentChannel, setPrivateChannel } from "../../actions/channel";

class DirectMessages extends Component {
  state = {
    users: [],
    user: null,
    usersRef: firebase.database().ref("users"),
    connectedRef: firebase.database().ref(".info/connected"),
    presenceRef: firebase.database().ref("presence"),
    privateMessageRef: firebase.database().ref("privateMessages")
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

  getChannelId = userId => {
    const currentUserId = this.props.currentUser.uid;
    return userId < currentUserId
      ? `${userId}/${currentUserId}`
      : `${currentUserId}/${userId}`;
  };

  changeChannel = user => {
    const channelId = this.getChannelId(user.uid);
    const channelData = {
      id: channelId,
      name: user.name
    };
    this.props.setCurrentChannel(channelData);
    this.props.setPrivateChannel(true);
  };

  render() {
    const { users } = this.state;
    return (
      <Segment
        style={{
          "background-color": "black",
          "border-style": "double",
          "border-color": "#6666ff"
        }}
      >
        <Header
          as="h2"
          style={{
            color: "#6666ff"
          }}
        >
          <span>
            <Icon name="mail" />
            <Header.Content>USERS</Header.Content> ({users.length}){" "}
          </span>
        </Header>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: 100,
            "background-color": "#f0f0f0"
          }}
        >
          <List divided relaxed>
            {users.map(user => {
              return (
                <List.Item
                  key={user.uid}
                  onClick={() => this.changeChannel(user)}
                  // active={channel.id === this.state.activeChannel}
                  style={{ opacity: 0.7, fontStyle: "italic" }}
                >
                  <Icon
                    name="circle"
                    color={this.isUserOnline(user) ? "green" : "red"}
                  />
                  <List.Content>
                    <List.Header style={{ color: "blue" }}>
                      @{user.name}
                    </List.Header>
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

export default connect(null, { setCurrentChannel, setPrivateChannel })(
  DirectMessages
);
