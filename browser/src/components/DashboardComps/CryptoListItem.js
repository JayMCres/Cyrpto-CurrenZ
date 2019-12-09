import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";

export default class CryptoListItem extends Component {
  render() {
    console.log("Crypto Item Props", this.props);
    return (
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={`http://cryptocompare.com/${this.props.image}`}
          />
          <Card.Header>{this.props.company}</Card.Header>
          <Card.Meta>{this.props.ticker}</Card.Meta>
          {/* <Card.Description>{this.props.overview}</Card.Description> */}
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
