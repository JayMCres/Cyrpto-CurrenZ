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
      <div style={{ "background-color": "black" }}>
        <Message
          style={{
            "border-style": "double",
            "border-color": "#6666ff",
            "background-color": "black"
          }}
        >
          <List>
            <List.Item>
              <Image
                avatar
                src={`http://cryptocompare.com/${this.props.image}`}
                // onClick={() => this.props.renderSideChart()}
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
              <Button.Group
                basic
                size="small"
                inverted
                color="violet"
                floated="right"
              >
                <Button
                  color="#6666ff"
                  circular
                  onClick={() => this.props.showIndepthPage()}
                  disabled={this.props.prices.length === 0}
                  icon
                >
                  <Icon circular name="btc" />
                </Button>
                <Button
                  color="#6666ff"
                  circular
                  onClick={() => this.props.renderSideChart()}
                  icon
                >
                  <Icon circular name="chart area" />
                </Button>
              </Button.Group>
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
