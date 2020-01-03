import React from "react";
import { Card, Item } from "semantic-ui-react";

const MarketCap = props => {
  // console.log("Market Cap Props", props);
  return (
    <Card
      style={{
        "background-color": "#6666ff",
        "text-align": "center"
      }}
    >
      <Item.Group divided>
        <Item>
          <Item.Content>
            <Item.Header as="a">{props.ticker}</Item.Header>
            <Item.Meta>
              <span className="cinema">
                <strong style={{ color: "white" }}>{props.data}</strong>
              </span>
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    </Card>
  );
};
export default MarketCap;
