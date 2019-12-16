import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentChannel, setPrivateChannel } from "../../actions/channel";
import firebase from "../../config/firebase";
import {
  Segment,
  Header,
  Icon,
  Modal,
  Form,
  Input,
  Button,
  Message,
  List
} from "semantic-ui-react";
import Messages from "./Messages";

class Channels extends Component {
  state = {
    channels: [],
    modal: false,
    channelName: "",
    channelDetails: "",
    channelsRef: firebase.database().ref("channels"),
    // messagesRef: firebase.database().ref("messages"),
    activeChannel: "",
    // showConvo: false,
    firstLoad: true
  };

  componentDidMount() {
    this.addListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  removeListeners = () => {
    this.state.channelsRef.off();
    // this.state.channels.forEach(channel => {
    //   this.state.messagesRef.child(channel.id).off();
    // });
  };
  addListeners = () => {
    let loadedChannels = [];
    this.state.channelsRef.on("child_added", snap => {
      loadedChannels.push(snap.val());
      // console.log(loadedChannels);
      // this.setState({ channels: loadedChannels });
      this.setState({ channels: loadedChannels }, () => this.setFirstChannel());
      // this.addNotificationListener(snap.key);
    });
  };

  setFirstChannel = () => {
    const firstChannel = this.state.channels[0];
    if (this.state.firstLoad && this.state.channels.length > 0) {
      this.props.setCurrentChannel(firstChannel);
      this.setActiveChannel(firstChannel);
    }
    this.setState({ firstLoad: false });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.addChannel();
    }
  };

  // renderChannelConvo = () => {
  //   this.setState({ showConvo: true });
  // };

  // hideChannelConvo = () => {
  //   this.setState({ showConvo: false });
  // };

  isFormValid = ({ channelName, channelDetails }) =>
    channelName && channelDetails;

  addChannel = () => {
    const { channelsRef, channelName, channelDetails } = this.state;
    const { currentUser } = this.props;

    const key = channelsRef.push().key;

    const newChannel = {
      id: key,
      name: channelName,
      details: channelDetails,
      createdBy: {
        name: currentUser.displayName,
        avatar: currentUser.photoURL
      }
    };

    channelsRef
      .child(key)
      .update(newChannel)
      .then(() => {
        this.setState({ channelName: "", channelDetails: "" });
        this.closeModal();
        console.log("channel added");
      })
      .catch(err => {
        console.error(err);
      });
  };

  changeChannel = channel => {
    // console.log(channel);
    this.setActiveChannel(channel);
    //   this.state.typingRef
    //   .child(this.state.channel.id)
    //   .child(this.state.user.uid)
    //   .remove();
    //   this.clearNotifications();
    this.props.setCurrentChannel(channel);
    this.props.renderChannelConvo();
    this.props.setPrivateChannel(false);
    // this.setState({ channel });
  };

  setActiveChannel = channel => {
    this.setState({ activeChannel: channel.id });
  };

  displayChannels = channels =>
    channels.length > 0 &&
    channels.map(channel => {
      // console.log(channel);
      return (
        <List.Item
          key={channel.id}
          onClick={() => this.changeChannel(channel)}
          active={channel.id === this.state.activeChannel}
        >
          <List.Icon
            name="arrows alternate"
            size="small"
            verticalAlign="middle"
          />
          <List.Content>
            <List.Header as="a">{channel.name}</List.Header>
          </List.Content>
        </List.Item>
      );
    });

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  openModal = () => this.setState({ modal: true });
  closeModal = () => {
    this.setState({ modal: false });
  };
  render() {
    // console.log("Channels State", this.state);
    // console.log("Channels Props", this.props);
    const { channels, modal, showConvo } = this.state;
    const { currentChannel, currentUser } = this.props;
    return (
      // prettier-ignore
      <div>
        
      <Segment  style={{ "border-style": "grove", "border-color": "MediumSlateBlue" }}>
        <Header as="h2">
          <span>
            <Icon name="mail" />
            <Header.Content>CHANNELS</Header.Content> {" "}
            ({channels.length}){" "}
            <Icon float="right" name="add" onClick={this.openModal}/>
          </span>
        </Header>
        <List divided relaxed>{this.displayChannels(channels)}</List> 
        </Segment>
     
      {/* {currentChannel === null ? <div> LOADING </div> : <Messages key={currentChannel && currentChannel.id}  currentChannel={currentChannel} currentUser={currentUser}  hideChannelConvo={this.hideChannelConvo} isPrivateChannel={this.props.isPrivateChannel}/>}
     
         */}
     

      <Modal basic  open={modal} onClose={this.closeModal}>
        <Modal.Header> Add Channel</Modal.Header>  <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Input
                  fluid
                  label="Name of Channel"
                  name="channelName"
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Field>
                <Input
                  fluid
                  label="About the Channel"
                  name="channelDetails"
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
          </Modal.Content>

          <Modal.Actions>
            <Button color="green" inverted onClick={this.handleSubmit}>
              <Icon name="checkmark" /> Add
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { setCurrentChannel, setPrivateChannel })(
  Channels
);
