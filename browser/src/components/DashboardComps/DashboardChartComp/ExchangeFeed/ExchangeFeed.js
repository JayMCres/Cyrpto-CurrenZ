import React from "react";
import { Image, List, Message } from "semantic-ui-react";

const ExchangeFeed = props => {
  console.log("Exchange Feed Props", props);
  return (
    <List.Item
      style={{
        "border-color": "#6666ff",
        "border-bottom-style": "solid",
        "border-width": "1px"
      }}
    >
      {/* <List.Item> */}
      <Image avatar src={props.iconUrl} />
      <List.Content>
        <List.Header as="a">{props.name}</List.Header>
        <List.Description style={{ color: "blue" }}>
          {props.websiteUrl}
        </List.Description>
      </List.Content>
      {/* </List.Item> */}

      <List floated="right" celled horizontal style={{ color: "#6666ff" }}>
        <List.Item>Volume:</List.Item>
        <List.Item>{props.volume.toLocaleString()}</List.Item>
        <List.Item floated="right">Market Share:</List.Item>
        <List.Item floated="right">{props.marketShare.toFixed(2)}%</List.Item>
      </List>
    </List.Item>
  );
};

export default ExchangeFeed;
