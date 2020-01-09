import React, { Component } from "react";
import { List, Button, Icon, Modal } from "semantic-ui-react";
import moment from "moment";

export default class Note extends Component {
  state = {
    open: false
  };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    let momentObj = moment(this.props.timestamp);
    console.log("note props", this.props);
    // console.log("note state", this.state);
    return (
      <Modal
        basic
        open={open}
        onOpen={this.open}
        onClose={this.close}
        trigger={
          <List.Item
            // key={note.id}
            onClick={() => this.props.setActiveNote(this.props.id)}
            // disabled={this.state.activeNote === null}
          >
            <List.Icon
              name="sticky note outline"
              size="small"
              verticalAlign="middle"
              onClick={this.openModal}
            />
            <List.Content>
              <List.Header as="a">{this.props.title}</List.Header>
              <List.Description as="a">
                {momentObj.format("YYYY-MM-DD")}
              </List.Description>
            </List.Content>
            <List.Icon
              floated="left"
              name="close"
              size="small"
              verticalAlign="middle"
              onClick={() => this.props.removeNote(this.props.id)}
            />
          </List.Item>
        }
      >
        <Modal.Header>{this.props.activeNote.title}</Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <p>{this.props.activeNote.details}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" inverted>
            <Icon
              name="remove"
              onClick={() => this.props.removeNote(this.props.id)}
            />
            Delete Note
          </Button>
          <Button color="green" inverted>
            <Icon name="checkmark" /> Edit Note
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
