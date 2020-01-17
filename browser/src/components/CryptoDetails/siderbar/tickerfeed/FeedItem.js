import React from "react";
import { Image, List } from "semantic-ui-react";

const FeedItem = props => {
  return (
    <List.Item
      onClick={() => props.handleIntervalStop()}
      style={{
        "border-color": "#6666ff",
        "border-bottom-style": "solid",
        "border-width": "1px"
      }}
    >
      <Image avatar src={props.image} />
      <List.Content as="a">{props.name}</List.Content>
      <List.Content as="a" floated="right" verticalAlign="middle">
        {props.current_price.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD"
        })}
      </List.Content>
      <List.Description as="a">
        <List celled horizontal style={{ color: "#6666ff" }}>
          <List.Item>% Change:</List.Item>
          <List.Item>{props.price_change_percentage_24h.toFixed(2)}%</List.Item>
          <List.Item>$ Change:</List.Item>
          <List.Item>
            {props.price_change_24h.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </List.Item>
        </List>
      </List.Description>
    </List.Item>
  );
};

export default FeedItem;
