import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class PriceTable extends Component {
  render() {
    // console.log("Price Table", this.props);
    return (
      <Table.Row>
        {/* <Image
          src={`http://cryptocompare.com/${this.props.image}`}
          rounded
          size="mini"
        /> */}
        <Table.Cell>{this.props.d}</Table.Cell>
        <Table.Cell>{this.props.open}</Table.Cell>
        <Table.Cell>{this.props.high}</Table.Cell>
        <Table.Cell>{this.props.low}</Table.Cell>
        <Table.Cell>{this.props.p}</Table.Cell>
      </Table.Row>
    );
  }
}

export default PriceTable;
