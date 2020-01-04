import React, { Component } from "react";
import { Form, Segment, Input, Button, Icon } from "semantic-ui-react";

export default class NotesForm extends Component {
  render() {
    // console.log("CryptoCardCont", this.props);
    return (
      <Segment>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Field>
            <Input
              fluid
              label="Title"
              name="noteTitle"
              value={this.props.noteTitle}
              onChange={this.props.handleChange}
            />
          </Form.Field>

          <Form.TextArea
            label="Note"
            name="noteDetails"
            value={this.props.noteDetails}
            onChange={this.props.handleChange}
          />
        </Form>
        <Button color="green" inverted onClick={this.props.handleSubmit}>
          <Icon name="checkmark" /> Add Note
        </Button>
      </Segment>
    );
  }
}
