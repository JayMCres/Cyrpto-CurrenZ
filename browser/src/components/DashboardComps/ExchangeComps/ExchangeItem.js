import React from "react";
import { Card, Image, Header, Statistic, Comment } from "semantic-ui-react";

const ExchangeItem = props => {
  // console.log("Exchange Props", props);
  return (
    <Card
      style={{
        "background-color": "grey"
      }}
    >
      <Statistic size="mini">
        <Statistic.Value
          style={{
            color: "blue"
          }}
        >
          <Image src={props.image} inline circular size="mini" />
          {props.trade_volume_24h_btc_normalized.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Statistic.Value>
        <Statistic.Label
          style={{
            color: "blue"
          }}
        >
          {props.name}
        </Statistic.Label>
      </Statistic>
    </Card>
  );
};
export default ExchangeItem;
