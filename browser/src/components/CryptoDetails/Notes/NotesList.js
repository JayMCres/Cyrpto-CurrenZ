import React, { Component } from "react";
import { List, Segment, Message } from "semantic-ui-react";
import Note from "./Note";

export default class Notes extends Component {
  state = { activeNote: [] };

  setActiveNote = noteId => {
    const foundNote = this.props.notes.filter(note => {
      return noteId === note.id;
    });
    console.log("foundNote", foundNote);
    this.setState({ activeNote: foundNote[0] });
  };
  render() {
    // console.log("NoteList Props", this.props);
    return (
      <Segment
        style={{
          "background-color": "	#F5F5F5"
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
                  setActiveNote={this.setActiveNote}
                  activeNote={this.state.activeNote}
                />
              );
            })}
          </List>
        )}
      </Segment>
    );
  }
}
