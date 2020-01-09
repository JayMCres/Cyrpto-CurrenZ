import React from "react";
import { Card, Item } from "semantic-ui-react";

const RateItem = props => {
  // console.log("Index Item Props", props);
  return (
    <Card
      style={{
        "background-color": "#6600ff",
        "text-align": "center"
      }}

      // style={{
      //   "background-color": "black",
      //   "text-align": "center"
      // }}
    >
      <Item.Group divided>
        <Item>
          <Item.Content>
            <Item.Meta
              style={{
                color: "white"
              }}
            >
              <span className="cinema">
                <strong>{props.name}</strong>
              </span>
            </Item.Meta>
            <Item.Header as="a" style={{ color: "#f79d20" }}>
              {props.value.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </Item.Header>
          </Item.Content>
        </Item>
      </Item.Group>
    </Card>
  );
};
export default RateItem;
