import React, { Component } from "react";
import { Message, Card, Segment, Header, Icon } from "semantic-ui-react";
import NotesForm from "./NotesForm";
import firebase from "../../../config/firebase";
import { connect } from "react-redux";
import NotesList from "./NotesList";
import NotePopUp from "./NotePopUp";

class NotesCont extends Component {
  state = {
    notes: [],
    noteTitle: "",
    noteDetails: "",
    notesRef: firebase.database().ref("notes"),
    // activeNote: {},
    firstLoad: true,
    notes: [],
    showNote: null
  };

  // setActiveNote = noteId => {
  //   const foundNote = this.state.notes.filter(note => {
  //     return noteId === note.id;
  //   });
  //   console.log("foundNote", foundNote);
  //   this.setState({ activeNote: foundNote });
  // };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    this.addListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  removeListeners = () => {
    this.state.notesRef.off();
    // this.state.channels.forEach(channel => {
    //   this.state.messagesRef.child(channel.id).off();
    // });
  };
  addListeners = () => {
    let loadedNotes = [];
    this.state.notesRef.on("child_added", snap => {
      loadedNotes.push(snap.val());
      // console.log(loadedChannels);
      // this.setState({ channels: loadedChannels });
      this.setState({
        notes: loadedNotes.filter(note => {
          return (
            note.userId === this.props.currentUser.uid &&
            note.ticker === this.props.crypto.ticker
          );
        })
      });
      // this.addNotificationListener(snap.key);
    });
  };

  addNote = () => {
    const userId = this.props.currentUser.uid;
    const { notesRef, noteTitle, noteDetails } = this.state;
    const { currentUser, crypto } = this.props;

    const key = notesRef.push().key;

    const newNote = {
      id: key,
      userId: userId,
      cryptoId: crypto.id,
      ticker: crypto.ticker,
      title: noteTitle,
      details: noteDetails,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    };

    notesRef
      .child(key)
      .update(newNote)
      .then(() => {
        this.setState({ noteTitle: "", noteDetails: "" });
        // this.closeModal();
        // console.log("channel added");
      })
      .catch(err => {
        console.error(err);
      });
  };
  removeNote = async noteId => {
    const deleteNote = this.state.notes.find(item => item.id === noteId);
    this.state.notesRef.child(deleteNote.id).remove();
    const updateNotes = this.state.notes.filter(item => {
      return item.id !== noteId;
    });
    if (deleteNote) {
      // console.log("deleteCrypto", deleteCrypto);
      await this.setState({
        notes: updateNotes
      });
      await this.addListeners();
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.addNote();
    }
  };

  isFormValid = ({ noteTitle, noteDetails }) => noteTitle && noteDetails;

  render() {
    // console.log("Notes Cont Props", this.props);
    console.log("Notes Cont State", this.state);
    const { noteTitle, noteDetails } = this.state;
    return (
      <div style={{ "background-color": "black" }}>
        {!this.state.showNote ? (
          <Segment
            style={{
              "background-color": "black",
              "border-style": "double",
              "border-color": "#6666ff"
            }}
          >
            <Header
              style={{
                color: "#6666ff"
              }}
              as="h2"
            >
              <span>
                <Icon name="mail" />
                <Header.Content>CRYPTO NOTES</Header.Content>
              </span>
            </Header>

            <NotesForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              noteTitle={noteTitle}
              noteDetails={noteDetails}
            />
            <Segment
              style={{
                overflow: "auto",
                maxHeight: 150,
                "background-color": "black"
              }}
            >
              <NotesList
                // activeNote={this.state.activeNote}
                notes={this.state.notes}
                removeNote={this.removeNote}
                setActiveNote={this.setActiveNote}
              />
            </Segment>
          </Segment>
        ) : (
          <NotePopUp />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  crypto: state.cryptos.crypto,
  currentUser: state.users.currentUser
});

export default connect(mapStateToProps)(NotesCont);
