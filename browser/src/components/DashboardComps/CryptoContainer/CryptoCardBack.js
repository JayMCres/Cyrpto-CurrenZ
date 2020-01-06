import React from "react";
import {
  Card,
  Image,
  Button,
  Statistic,
  Message,
  List
} from "semantic-ui-react";

const CryptoCardBack = props => (
  <Card style={{ "border-style": "double", "border-color": "MediumSlateBlue" }}>
    <Card.Content>
      <Image
        floated="right"
        size="mini"
        src={`http://cryptocompare.com/${props.details.image}`}
        onClick={() => props.handleCardFlip()}
      />
      <Card.Header>{props.details.company}</Card.Header>
      <Card.Description>
        <List divided relaxed>
          <List.Item>
            <List.Icon name="expand" size="small" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">{props.details.MKTCAP}</List.Header>
              <List.Description as="a">Market Cap</List.Description>{" "}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="expand" size="small" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">{props.details.CHANGEPCTHOUR}%</List.Header>
              <List.Description as="a">% Change Hour</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="expand" size="small" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">{props.details.CHANGEHOUR}</List.Header>
              <List.Description as="a">$ Change Hour</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Card.Description>
    </Card.Content>
  </Card>
);

export default CryptoCardBack;
