import React, { Component } from "react";
import { Form, Segment, Input, Button, Icon } from "semantic-ui-react";

export default class NotesForm extends Component {
  render() {
    // console.log("CryptoCardCont", this.props);
    return (
      <Segment
        style={{
          "background-color": "black",
          "border-style": "double",
          "border-color": "#6666ff"
        }}
      >
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Field>
            <Input
              fluid
              placeholder="Enter Title..."
              name="noteTitle"
              value={this.props.noteTitle}
              onChange={this.props.handleChange}
            />
          </Form.Field>

          <Form.TextArea
            name="noteDetails"
            placeholder="Enter Note Body..."
            value={this.props.noteDetails}
            onChange={this.props.handleChange}
          />
        </Form>
        <br></br>
        <Button color="violet" inverted onClick={this.props.handleSubmit}>
          <Icon name="checkmark" /> Add Note
        </Button>
      </Segment>
    );
  }
}
