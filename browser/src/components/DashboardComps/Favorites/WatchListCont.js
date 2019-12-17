import React, { Component } from "react";
import { Segment, Message } from "semantic-ui-react";
// import { connect } from "react-redux";
// import WeeklyCharts from "./WeeklyCharts";

// import { fetchWeekly } from "../../../actions/cryptos";

class WatchListCont extends Component {
  // componentDidMount() {
  //   this.handleCryptoPriceFetch();
  // }
  // handleCryptoPriceFetch = async () => {
  //   return await this.props.favorites.map(crypto => {
  //     return this.props.addPricesToFavorites(crypto.id);
  //   });
  // };

  renderWatchListCont = () => {
    if (this.props.favoritesPrices.length === 0) {
      return <Message info> Loading...</Message>;
    } else {
      return <Segment>Header</Segment>;
    }
  };

  render() {
    // console.log("Favorite card", this.state);
    return <Segment>{this.renderWatchListCont()}</Segment>;
  }
}

// export default connect(null)(Favorite);
export default WatchListCont;
