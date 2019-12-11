import React, { Component } from "react";
import { Comment, Image, List } from "semantic-ui-react";
import moment from "moment";

const isOwnMessage = (message, user) => {
  // return message.user.id === user.uid ? "message__self" : "";
  if (message.user.id === user.uid) {
    return "black";
  } else {
    return "blue";
  }
};

const timeFromNow = timestamp => moment(timestamp).fromNow();

const Message = props => {
  // console.log("MESSAGE", props);
  return (
    <List divided relaxed>
      <List.Item>
        <Image avatar src={props.message.user.avatar} />
        <List.Content>
          <List.Header
            as="h4"
            style={{ color: isOwnMessage(props.message, props.user) }}
          >
            {props.message.content}
          </List.Header>
          <List.Description as="a">
            <span>
              {props.message.user.name} | {timeFromNow(props.message.timestamp)}{" "}
            </span>
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default Message;
