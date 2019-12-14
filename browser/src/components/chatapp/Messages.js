import React, { Component } from "react";
import { Segment, Label, Icon } from "semantic-ui-react";
import MessageHeader from "./MessageHeader";
import MessageForm from "./MessageForm";
import Message from "./Message";
// import firebase from "../../config/firebase";

export default class Messages extends Component {
  state = {
    channel: this.props.currentChannel,
    messages: [],
    messagesLoading: true,
    searchTerm: "",
    searchResults: []
    // messagesRef: firebase.database().ref("messages")
  };

  componentDidMount() {
    const { currentUser } = this.props;
    const { channel } = this.state;
    // console.log("Message User", currentUser);
    // console.log("Message channel", channel);
    if (channel && currentUser) {
      // this.removeListeners(listeners);
      this.addListeners(channel.id);
      // this.addUserStarsListener(channel.id, currentUser.uid);
    }
  }

  addListeners = channelId => {
    this.addMessageListener(channelId);
    // this.addTypingListeners(channelId);
  };

  addMessageListener = channelId => {
    let loadedMessages = [];
    this.props.messagesRef.child(channelId).on("child_added", snap => {
      loadedMessages.push(snap.val());
      // console.log("current Messages", loadedMessages);
      this.setState({
        messages: loadedMessages,
        messagesLoading: false
      });
      //   this.countUniqueUsers(loadedMessages);
      //   this.countUserPosts(loadedMessages);
    });
    // this.addToListeners(channelId, ref, "child_added");
  };

  handleSearchChange = event => {
    this.setState({ searchTerm: event.target.value }, () =>
      this.handleSearchMessages()
    );
  };

  handleSearchMessages = () => {
    const channelMessages = [...this.state.messages];
    const regex = new RegExp(this.state.searchTerm, "gi");
    const searchResults = channelMessages.reduce((acc, message) => {
      if (message.content && message.content.match(regex)) {
        acc.push(message);
      }
      return acc;
    }, []);
    this.setState({ searchResults });
  };
  render() {
    const { channel, messages, searchTerm, searchResults } = this.state;
    const { currentUser, messagesRef } = this.props;
    // console.log("Messages", this.state);
    return (
      <Segment>
        <Label as="a" corner="right" color="red">
          <Icon name="remove" onClick={() => this.props.hideChannelConvo()} />
        </Label>
        <MessageHeader
          currentChannel={channel}
          handleSearchChange={this.handleSearchChange}
        />
        <Segment style={{ overflow: "auto", maxHeight: 250 }}>
          {searchTerm
            ? searchResults.map(message => {
                return (
                  <Message
                    key={message.timestamp}
                    message={message}
                    user={this.props.currentUser}
                  />
                );
              })
            : messages.map(message => {
                return (
                  <Message
                    key={message.timestamp}
                    message={message}
                    user={this.props.currentUser}
                  />
                );
              })}
        </Segment>
        <MessageForm
          currentChannel={channel}
          messagesRef={messagesRef}
          currentUser={currentUser}
        />
      </Segment>
    );
  }
}
