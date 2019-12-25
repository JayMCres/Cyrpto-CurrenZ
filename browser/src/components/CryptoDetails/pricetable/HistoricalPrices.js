import React, { Component } from "react";

import { Segment, Table, Input } from "semantic-ui-react";
import TableCont from "./TableCont";

export default class HistoricalPrices extends Component {
  state = { inputValue: "" };
  handleChange = event => {
    // console.log("Changing")
    // console.log (event.target.name)
    this.setState({
      inputValue: event.target.value
    });
  };

  filterHistoricals = () =>
    this.props.historicals.filter(item => {
      return item.d.toLowerCase().includes(this.state.inputValue.toLowerCase());
    });
  render() {
    console.log("Historical Prices", this.props);
    return (
      <Segment inverted>
        <Input
          focus
          placeholder="Search..."
          onChange={this.handleChange}
          type="text"
          value={this.state.inputValue}
        />
        <TableCont historicals={this.filterHistoricals()} />
      </Segment>
    );
  }
}
