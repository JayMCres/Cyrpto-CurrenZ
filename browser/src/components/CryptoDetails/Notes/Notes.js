import React, { Component } from "react";
import { List, Segment } from "semantic-ui-react";
import Note from "./Note";

export default class Notes extends Component {
  render() {
    // console.log("Notes Props", this.props);
    return (
      <Segment>
        <List divided relaxed>
          {this.props.notes.map(note => {
            return (
              <Note
                key={note.id}
                {...note}
                removeNote={this.props.removeNote}
              />
            );
          })}
        </List>
      </Segment>
    );
  }
}
