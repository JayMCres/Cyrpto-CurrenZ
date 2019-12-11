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
            as="h6"
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

      {/* <Comment> */}
      {/* <Comment.Avatar src={props.message.user.avatar} /> */}
      {/* <Comment.Content className={isOwnMessage(props.message, props.user)}>
          <Comment.Author as="a">{props.message.user.name}</Comment.Author>
          <Comment.Metadata>
            {timeFromNow(props.message.timestamp)}
          </Comment.Metadata>
          <Comment.Text>{props.message.content}</Comment.Text> */}
      {/* {isImage(message) ? (
            <Image src={message.image} className="message__image" />
          ) : (
            <Comment.Text>{message.content}</Comment.Text>
          )} */}
      {/* </Comment.Content>
      </Comment> */}
    </List>
  );
};

export default Message;
