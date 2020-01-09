import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";

class NoteForm extends Component {
  state = {
    title: "",
    body: ""
  };

  addNote = event => {
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    event.preventDefault();
    // console.log(event.target)
    fetch("http://localhost:5000/api/user_note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        favId: this.props.clickedFavorite.id,
        favTicker: this.props.clickedFavorite.ticker,
        favName: this.props.clickedFavorite.name,
        title: this.refs.title.value,
        content: this.refs.body.value,
        userId: this.props.user.id
      })
    })
      .then(response => response.json())
      .then(newNote => this.props.addNewNoteToNotes(newNote))
      .then(
        this.setState({
          title: "",
          body: ""
        })
      );
    // this.refreshNotePage();
  };

  // refreshNotePage = () => {
  //   window.location.reload(false);
  // };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };
  render() {
    // console.log("Note Form", this.props);
    return (
      <Segment
        style={{
          overflow: "auto",
          maxHeight: 150,
          "background-color": "#f0f0f0"
        }}
      >
        <Form onSubmit={this.addNote}>
          <Form.Field>
            <label style={{ color: "blue" }}>Title</label>
            <input
              name="title"
              placeholder="Enter Title"
              value={this.state.title}
              onChange={this.handleInputChange}
              ref="title"
            />
          </Form.Field>
          <Form.Field>
            <label style={{ color: "blue" }}>Content</label>
            <textarea
              name="body"
              placeholder="Write Note ...."
              value={this.state.body}
              onChange={this.handleInputChange}
              ref="body"
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default NoteForm;
