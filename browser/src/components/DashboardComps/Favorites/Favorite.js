import React, { Component } from "react";
import { Card, Statistic, List, Image } from "semantic-ui-react";

export default class Favorite extends Component {
  render() {
    console.log("Favorite card", this.props);
    return (
      <Card inverted color="violet">
        <List>
          <List.Item>
            <Image
              avatar
              src={`http://cryptocompare.com/${this.props.details.image}`}
              onClick={() => this.props.showIndepthPage()}
            />
            <List.Content>
              <List.Header as="a">{this.props.details.ticker}</List.Header>
              <List.Description>
                <a>
                  <h3>
                    <b>{this.props.details.company}</b>
                  </h3>
                </a>
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Card>
    );
  }
}
