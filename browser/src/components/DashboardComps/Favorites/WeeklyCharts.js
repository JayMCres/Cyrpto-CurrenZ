import React, { Component } from "react";
import { connect } from "react-redux";
// import FavoriteCard from "./FavoriteCard";
import WeeklyChart from "./WeeklyChart";

class WeeklyCharts extends Component {
  render() {
    console.log("Charts", this.props);
    // const chartOne = this.props.histOne.reverse();
    // console.log("ChartOne", chartOne);
    const sidePrices = this.props.prices.map((price, index) => {
      return {
        dayOne: price[0],
        dayTwo: price[1],
        dayThree: price[2],
        dayFour: price[3],
        dayFive: price[4],
        daySix: price[5],
        daySeven: price[6]
      };
    });

    return (
      <div>
        test
        {sidePrices.map((crypto, index) => {
          // console.log("Item", crypto[0]);
          return <WeeklyChart key={index} {...crypto} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prices: state.cryptos.weeklyPrices
});

// export default WeeklyCharts;

export default connect(mapStateToProps)(WeeklyCharts);
