import React, { Component } from "react";
import { Segment, Message } from "semantic-ui-react";
// import { connect } from "react-redux";
import WeeklyCharts from "./WeeklyCharts";

// import { fetchWeekly } from "../../../actions/cryptos";

class WatchListCont extends Component {
  state = {
    newPrices: []
  };

  componentDidMount() {
    this.setState({
      newPrices: this.props.favoritesPrices
    });
  }
  render() {
    // const { currentPrices, pastPrices } = this.state;
    console.log("watch list COnt", this.state);

    return (
      <Segment style={{ overflow: "auto", maxHeight: 950 }}>
        {this.state.newPrices.length === 0 ? (
          <Message>Loading</Message>
        ) : (
          <WeeklyCharts prices={this.state.newPrices} />
        )}
      </Segment>
    );
  }
}

// export default connect(null)(Favorite);
export default WatchListCont;
