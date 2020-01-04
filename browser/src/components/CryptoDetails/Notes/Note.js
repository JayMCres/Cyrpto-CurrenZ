import React, { Component } from "react";
import { List, Segment } from "semantic-ui-react";
import moment from "moment";

export default class Note extends Component {
  render() {
    console.log("Note Props", this.props);
    let momentObj = moment(this.props.timestamp);

    return (
      <List.Item
      // key={note.id}
      // onClick={() => this.changeChannel(channel)}
      // active={channel.id === this.state.activeChannel}
      >
        <List.Icon
          name="sticky note outline"
          size="small"
          verticalAlign="middle"
        />
        <List.Content>
          <List.Header style={{ color: "blue" }}>
            {this.props.title}
          </List.Header>
          <List.Description as="a">
            {momentObj.format("YYYY-MM-DD")}
          </List.Description>
        </List.Content>
        <List.Icon
          floated="left"
          name="close"
          size="small"
          verticalAlign="middle"
          onClick={() => this.props.removeNote(this.props.id)}
        />
      </List.Item>
    );
  }
}
