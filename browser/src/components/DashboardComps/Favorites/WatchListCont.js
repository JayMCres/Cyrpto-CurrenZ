import React, { Component } from "react";
import { Segment, Message } from "semantic-ui-react";
// import { connect } from "react-redux";
import WeeklyCharts from "./WeeklyCharts";

// import { fetchWeekly } from "../../../actions/cryptos";

class WatchListCont extends Component {
  render() {
    // console.log("Favorite card", this.state);
    return (
      <Segment>
        <WeeklyCharts prices={this.props.favoritesPrices} />
      </Segment>
    );
  }
}

// export default connect(null)(Favorite);
export default WatchListCont;
