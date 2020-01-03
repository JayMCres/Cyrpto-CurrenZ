import React from "react";
import { Card, Statistic, Icon, Message, Item } from "semantic-ui-react";

const RateItem = props => {
  // console.log("Index Item Props", props);
  return (
    <Card
      style={{
        "background-color": "black",
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
    // <Card
    //   style={{
    //     "background-color": "black"
    //   }}
    // >
    //   >
    //   <Statistic size="mini">
    //     <Statistic.Value style={{ color: "orange" }}>
    //       {props.value.toLocaleString("us-EN", {
    //         style: "currency",
    //         currency: "USD"
    //       })}
    //     </Statistic.Value>
    //     <Statistic.Label style={{ color: "orange" }}>
    //       {props.name}
    //     </Statistic.Label>
    //   </Statistic>
    // </Card>
  );
};
export default RateItem;
