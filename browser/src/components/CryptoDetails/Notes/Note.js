import React, { Component } from "react";
import { List, Button, Icon, Modal } from "semantic-ui-react";
import moment from "moment";

export default class Note extends Component {
  state = {
    open: false,
    updateActiveNote: {}
  };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  componentWillMount() {
    this.setState({ updateActiveNote: this.props.activeNote });
  }

  handleNoteUpdate = async () => {
    await this.props.handleUpdateRender();
    await this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    let momentObj = moment(this.props.activeNote.timestamp);
    const newNote = this.props.activeNote;
    // console.log("note props", this.props);
    console.log("note state", this.state);
    return (
      <Modal
        basic
        open={open}
        onOpen={this.open}
        onClose={this.close}
        trigger={
          <List.Item
            style={{
              "border-color": "#6666ff",
              "border-bottom-style": "solid",
              "border-width": "1px",
              "background-color": "#f2e6ff",
              padding: "20px 20px 20px 20px"
            }}
            onClick={() => this.props.setActiveNote(this.props.id)}
          >
            <List.Content floated="right">
              <List.Icon
                name="x"
                // size="small"
                verticalAlign="middle"
                onClick={() => this.props.removeNote(this.props.id)}
              />
            </List.Content>
            <List.Icon
              name="sticky note outline"
              // size="small"
              verticalAlign="middle"
              onClick={this.openModal}
            />
            <List.Content>
              {" "}
              <List.Header as="a">{this.props.title}</List.Header>
              <List.Description as="a">
                {momentObj.format("YYYY-MM-DD")}
              </List.Description>
            </List.Content>
          </List.Item>
        }
      >
        <Modal.Header>{newNote.title}</Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <p>{newNote.details}</p>
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
          <Button color="green" inverted onClick={this.handleNoteUpdate}>
            <Icon name="checkmark" />
            Edit Note
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
