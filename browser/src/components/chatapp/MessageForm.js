import React, { Component } from "react";
import { Segment, Button, Input } from "semantic-ui-react";
import firebase from "../../config/firebase";

export default class MessageForm extends Component {
  state = {
    message: "",
    loading: false,
    channel: this.props.currentChannel,
    errors: []
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendMessage = () => {
    const { getMessagesRef, currentUser } = this.props;
    const { message, channel } = this.state;
    if (message) {
      this.setState({ loading: true });
      getMessagesRef()
        .child(channel.id)
        .push()
        .set(this.createMessage())
        .then(() => {
          this.setState({ loading: false, message: "", errors: [] });
          console.log("Message Sent");
          // typingRef
          //   .child(channel.id)
          //   .child(currentUser.uid)
          //   .remove();
        })
        .catch(err => {
          console.error(err);
          this.setState({
            loading: false,
            errors: this.state.errors.concat(err)
          });
        });
    } else {
      this.setState({
        errors: this.state.errors.concat({ message: "Add a Message" })
      });
    }
  };

  createMessage = () => {
    const message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: this.props.currentUser.uid,
        name: this.props.currentUser.displayName,
        avatar: this.props.currentUser.photoURL
      },
      content: this.state.message
    };
    return message;
  };
  render() {
    const { errors, message, loading } = this.state;
    return (
      <div>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: 300,
            "background-color": "#e6e6ff"
          }}
        >
          <Input
            fluid
            name="message"
            onChange={this.handleChange}
            // onKeyDown={this.handleKeyDown}
            value={message}
            // ref={node => (this.messageInputRef = node)}
            style={{ marginBottom: "0.7em" }}
            label={<Button icon={"add"} />}
            labelPosition="left"
            className={
              errors.some(error => error.message.includes("message"))
                ? "error"
                : ""
            }
            placeholder="Write your message"
          />
          <Button.Group icon widths="2">
            <Button
              disabled={loading}
              onClick={this.sendMessage}
              content="Add Replay"
              labelPosition="left"
              icon="edit"
              color="violet"
            />
            {/* <Button
              color="teal"
              // disabled={uploadState === "uploading"}
              // onClick={this.openModal}
              content="Upload Media"
              labelPosition="right"
              icon="cloud upload"
            /> */}
          </Button.Group>
        </Segment>
      </div>
    );
  }
}
