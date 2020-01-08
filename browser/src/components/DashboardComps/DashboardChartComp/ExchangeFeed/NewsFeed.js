import React from "react";
import { Image, List } from "semantic-ui-react";
import Linkify from "react-linkify";
const moment = require("moment");

const NewsFeed = props => {
  console.log("Exchange Feed Props", props);
  let date = moment(props.published).format("MMM DD YYYY");
  return (
    <List.Item
      style={{
        "border-color": "#6666ff",
        "border-bottom-style": "solid",
        "border-width": "1px"
      }}
    >
      <Image avatar src={props.imageurl} />
      <List.Content>
        <List.Header style={{ color: "white", "font-size": "12px" }}>
          {props.title}
          || <span style={{ color: "white", "font-size": "12px" }}>{date}</span>
        </List.Header>
        <List.Description style={{ color: "white", "font-size": "11px" }}>
          {props.source}:
          <Linkify style={{ color: "blue", "font-size": "9px" }}>
            {props.url}
          </Linkify>
        </List.Description>
      </List.Content>
    </List.Item>
  );
};

export default NewsFeed;
