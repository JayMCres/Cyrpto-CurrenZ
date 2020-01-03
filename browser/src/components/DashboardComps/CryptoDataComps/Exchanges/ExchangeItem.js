import React from "react";
import { Card, Item } from "semantic-ui-react";

const ExchangeItem = props => {
  // console.log("Exchange Props", props);
  return (
    <Card
      style={{
        "background-color": "#6600ff",
        "text-align": "center"
      }}
    >
      <Item.Group divided>
        <Item>
          <Item.Image
            src={props.image}
            avatar
            inline
            circular
            spaced="right"
            size="mini"
          />
          <Item.Content>
            <Item.Header as="a" style={{ color: "#f79d20" }}>
              {props.trade_volume_24h_btc_normalized.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </Item.Header>
            <Item.Meta>
              <span className="cinema">
                <strong style={{ color: "white" }}>{props.name}</strong>
              </span>
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    </Card>
  );
};
export default ExchangeItem;
