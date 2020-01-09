import React, { Component } from "react";
// import uuid from "uuid";

import { Table } from "semantic-ui-react";

class TableHeader extends Component {
  render() {
    // console.log("LIST", this.props);
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Open</Table.HeaderCell>
          <Table.HeaderCell>High</Table.HeaderCell>
          <Table.HeaderCell>Low</Table.HeaderCell>
          <Table.HeaderCell>Close</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
  }
}
export default TableHeader;
