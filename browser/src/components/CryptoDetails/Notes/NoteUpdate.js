import React, { Component } from "react";
import { Form, Segment, Input, Button, Icon } from "semantic-ui-react";
import firebase from "../../../config/firebase";

export default class NoteUpdateForm extends Component {
  state = {
    updateNote: [],
    key: "",
    updateTitle: "",
    updateBody: ""
  };

  componentDidMount() {
    this.setState({
      updateTitle: this.props.activeNote.title,
      updateBody: this.props.activeNote.details
    });
  }

  editNote = event => {
    event.preventDefault();
    const { updateTitle, updateBody } = this.state;

    const updateRef = firebase.database().ref("notes");

    const noteToUpdate = updateRef.child(this.props.activeNote.id);

    if (noteToUpdate && this.isFormValid(this.state)) {
      noteToUpdate
        .update({ title: updateTitle, details: updateBody })
        .then(() =>
          this.setState({ key: "", updateTitle: "", updateBody: "" })
        );
    }
    this.props.handleUpdateRender();
  };

  isFormValid = ({ updateTitle, updateBody }) => updateTitle && updateBody;

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };
  render() {
    // console.log("Crypto Note update", this.state);
    return (
      <Segment
        style={{
          "background-color": "black",
          "border-style": "double",
          "border-color": "#6666ff"
        }}
      >
        <Form onSubmit={this.editeNote}>
          <Form.Field>
            <Input
              fluid
              name="updateTitle"
              value={this.state.updateTitle}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.TextArea
            name="updateBody"
            // placeholder="Enter Note Body..."
            value={this.state.updateBody}
            onChange={this.handleChange}
            style={{ minHeight: 500 }}
          />
        </Form>
        <br></br>
        <Button color="violet" onClick={this.editNote} inverted>
          <Icon name="checkmark" />
          Edit Note
        </Button>
      </Segment>
    );
  }
}
