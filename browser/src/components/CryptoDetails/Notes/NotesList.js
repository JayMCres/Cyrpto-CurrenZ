import React, { Component } from "react";
import { List, Segment, Message } from "semantic-ui-react";
import Note from "./Note";

export default class Notes extends Component {
  render() {
    // console.log("NoteList Props", this.props);
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        {this.props.notes.length === 0 ? (
          <Message color="violet">No Notes</Message>
        ) : (
          <List divided relaxed>
            {this.props.notes.map(note => {
              return (
                <Note
                  key={note.id}
                  {...note}
                  removeNote={this.props.removeNote}
                  setActiveNote={this.props.setActiveNote}
                  activeNote={this.props.activeNote}
                  handleUpdateRender={this.props.handleUpdateRender}
                />
              );
            })}
          </List>
        )}
      </Segment>
    );
  }
}
