import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";

import "./Popup.css";
import NoteUpdateForm from "./NoteUpdateForm";
// import UpdateForm from "./UpdateForm";

class NotePopUp extends Component {
  render() {
    // console.log("Popup", this.props);

    return (
      <div>
        <div className="popup">
          <div className="popup_inner">
            <div>
              <Segment inverted>
                <Button onClick={() => this.props.closePopup()}>
                  close me
                </Button>
                <br />
                <br />
                <NoteUpdateForm
                  user={this.props.user}
                  addNewNoteToNotes={this.props.addNewNoteToNotes}
                  clickedFavorite={this.props.clickedFavorite}
                />
              </Segment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotePopUp;
