import React from "react";
import { Segment, Icon, Menu, Header, List, Input } from "semantic-ui-react";

const DirectMessage = props => {
  // console.log("MESSAGE", props);
  return (
    <List divided relaxed>
      {props.users.map(user => {
        return (
          <List.Item
            key={user.uid}
            onClick={() => props.changeChannel(user)}
            // active={channel.id === this.state.activeChannel}
            style={{ opacity: 0.7, fontStyle: "italic" }}
          >
            <Icon
              name="circle"
              color={props.isUserOnline(user) ? "green" : "red"}
            />
            <List.Content>
              <List.Header style={{ color: "blue" }}>{user.name}</List.Header>
            </List.Content>
            <Icon float="right" name="add" />
          </List.Item>
        );
      })}
    </List>
  );
};

export default DirectMessage;
