import React from "react";
import { Card, Item } from "semantic-ui-react";

const MarketCap = props => {
  // console.log("Market Cap Props", props);
  return (
    <Card
      style={{
        "background-color": "#6600ff",
        "text-align": "center"
      }}
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
                <strong>{props.ticker}</strong>
              </span>
            </Item.Meta>
            <Item.Header as="a" style={{ color: "#f79d20" }}>
              {props.data}
            </Item.Header>
          </Item.Content>
        </Item>
      </Item.Group>
    </Card>
  );
};
export default MarketCap;
