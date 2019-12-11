import React, { Component } from "react";
// import uuid from "uuid";

import { Input, Segment, Table } from "semantic-ui-react";
import PriceTable from "./PriceTable";

class TableHeader extends Component {
  render() {
    console.log("LIST", this.props);
    return (
      // <Segment>
      //   <Input focus placeholder="Search..." />
      //   <Table style={{ overflow: "auto" }} color={"blue"} inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Open</Table.HeaderCell>
          <Table.HeaderCell>High</Table.HeaderCell>
          <Table.HeaderCell>Low</Table.HeaderCell>
          <Table.HeaderCell>Close</Table.HeaderCell>
          {/* <Table.HeaderCell>Daily % Change</Table.HeaderCell> */}
        </Table.Row>
      </Table.Header>
    );
  }
}
export default TableHeader;
