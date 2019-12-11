import React, { Component } from "react";
// import { connect } from "react-redux";
import {
  Image,
  List,
  Message,
  Table,
  Menu,
  Button,
  Icon
} from "semantic-ui-react";

class CryptoSideDetails extends Component {
  render() {
    console.log("Detial Side Props", this.props);
    return (
      <div>
        <Message>
          <List>
            <List.Item>
              <Image
                avatar
                src={`http://cryptocompare.com/${this.props.image}`}
              />
              <List.Content>
                <List.Header as="a">{this.props.ticker}</List.Header>
                <List.Description>
                  <a>
                    <h3>
                      <b>{this.props.company}</b>
                    </h3>
                  </a>
                </List.Description>
              </List.Content>
              <Button
                onClick={() => this.props.renderSideChart()}
                floated="right"
                icon
              >
                <Icon name="chart area" />
              </Button>
            </List.Item>
          </List>
        </Message>
        <Table attached="bottom">
          <Table.Header>
            <Table.HeaderCell textAlign="center">Price ($)</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Daily Change</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              Change 24 Hrs
            </Table.HeaderCell>
          </Table.Header>
        </Table>
        <Menu attached compact widths={3}>
          <Menu.Item as="a" textAlign="center">
            {this.props.price}
          </Menu.Item>
          <Menu.Item as="a" textAlign="center">
            {this.props.CHANGEPCTDAY}
          </Menu.Item>
          <Menu.Item as="a" textAlign="center">
            {this.props.CHANGEPCT24HOUR}
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default CryptoSideDetails;
