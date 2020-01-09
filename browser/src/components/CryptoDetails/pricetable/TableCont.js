import React, { Component } from "react";
import TableHeader from "./TableHeader";
import PriceTable from "./PriceTable";
import { Segment, Table } from "semantic-ui-react";

export default class TableCont extends Component {
  render() {
    // console.log("TableCont", this.props);
    return (
      <Segment
        inverted
        style={{
          overflow: "auto",
          maxHeight: 500,
          "background-color": "black"
        }}
      >
        <Table inverted color="violet">
          <TableHeader />
          <Table.Body>
            {this.props.historicals.map((crypto, index) => {
              return <PriceTable key={index} {...crypto} />;
            })}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}
