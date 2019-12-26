import React, { Component } from "react";

import { Segment, Icon, Input, Button } from "semantic-ui-react";
import TableCont from "./TableCont";

export default class HistoricalPrices extends Component {
  state = { inputValue: "", showPriceTable: true };

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

  handlePriceTableShow = () => {
    this.setState({
      showPriceTable: !this.state.showPriceTable
    });
  };
  render() {
    // console.log("Historical Prices", this.props);
    return (
      <Segment
        inverted
        style={{ "border-style": "none", "background-color": "black" }}
      >
        <Input
          focus
          placeholder="Search..."
          onChange={this.handleChange}
          type="text"
          value={this.state.inputValue}
        />
        <Button
          floated="right"
          size="small"
          inverted
          color="violet"
          circular
          onClick={() => this.handlePriceTableShow()}
          icon
        >
          <Icon circular name="chart area" />
        </Button>
        {this.state.showPriceTable ? (
          <TableCont historicals={this.filterHistoricals()} />
        ) : null}
      </Segment>
    );
  }
}
