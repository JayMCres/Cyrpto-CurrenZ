import React, { Component } from "react";
import { Segment, Icon, Menu, Header, List, Input } from "semantic-ui-react";
import firebase from "../../config/firebase";
import { connect } from "react-redux";
import { setCurrentChannel, setPrivateChannel } from "../../actions/channel";
import DirectMessage from "./DirectMessage";

class DirectMessages extends Component {
  state = {
    users: [],
    user: null,
    usersRef: firebase.database().ref("users"),
    connectedRef: firebase.database().ref(".info/connected"),
    presenceRef: firebase.database().ref("presence"),
    privateMessageRef: firebase.database().ref("privateMessages"),
    inputValue: ""
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

  handleChange = event => {
    // console.log("Changing")
    // console.log (event.target.name)
    this.setState({
      inputValue: event.target.value
    });
  };

  filterUsers = () =>
    this.state.users.filter(item => {
      return item.name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
    });

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
          floated="left"
          style={{
            color: "#6666ff"
          }}
        >
          <span>
            <Icon name="mail" />
            <Header.Content>USERS</Header.Content> ({users.length}){" "}
          </span>
        </Header>
        <Header floated="right">
          <Input
            floated="right"
            // loading={searchLoading}
            onChange={this.handleChange}
            type="text"
            value={this.state.inputValue}
            size="mini"
            placeholder="Search Users"
          />
        </Header>
        {/* </Segment> */}
        <Segment
          attached="bottom"
          style={{
            overflow: "auto",
            maxHeight: 100,
            "background-color": "#f0f0f0"
          }}
        >
          <DirectMessage
            users={this.filterUsers()}
            isUserOnline={this.isUserOnline}
            changeChannel={this.changeChannel}
          />
        </Segment>
      </Segment>
    );
  }
}

export default connect(null, { setCurrentChannel, setPrivateChannel })(
  DirectMessages
);
