import React, { Component } from "react";
import { Segment, List, Image } from "semantic-ui-react";

export default class Card extends Component {
  render() {
    console.log("Card Props", this.props);
    return (
      <List.Item>
        <Image avatar src={`http://cryptocompare.com${this.props.LogoUrl}`} />
        <List.Content>
          <List.Header as="a">
            {this.props.Name} || {this.props.CardType}
          </List.Header>
          {/* <List.Description as="a">
            {this.props.CardType} ||{this.props.CardCurrency}{" "}
          </List.Description> */}
          <List bulleted horizontal>
            <List.Item as="a">
              Setup Cost:
              {parseInt(this.props.Fees.SetupCost).toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </List.Item>
            <List.Item as="a">
              Load Fee:
              {parseInt(this.props.Fees.LoadFee).toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </List.Item>
            <List.Item as="a">
              ATM Fee:{" "}
              {parseInt(this.props.Fees.ATMDomesticFee).toLocaleString(
                "us-EN",
                {
                  style: "currency",
                  currency: "USD"
                }
              )}
            </List.Item>
            <List.Item as="a">
              Monthly Fee:
              {parseInt(this.props.Fees.MonthlyFee).toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </List.Item>
          </List>
        </List.Content>
      </List.Item>
    );
  }
}
