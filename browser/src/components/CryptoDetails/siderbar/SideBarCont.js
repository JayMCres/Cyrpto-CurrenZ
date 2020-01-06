import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";

import { connect } from "react-redux";
// import NewsList from "./newsfeed/NewsList";
import SidePriceChart from "./SidePriceChart";
import UserProfile from "../../DashboardComps/CryptoSideCont/UserProfile";
import SideBar from "./SideBar";
// import CardsCont from "./cryptocards/CardsCont";
class SideBarCont extends Component {
  render() {
    console.log("Side", this.props);
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
      <Segment
        inverted
        style={{ "border-style": "none", "background-color": "black" }}
      >
        <Segment style={{ "background-color": "#6666ff" }}>
          <UserProfile
            currentUser={this.props.currentUser}
            clearFavorites={this.props.clearFavorites}
          />
        </Segment>
        <Segment
          inverted
          style={{ "border-style": "none", "background-color": "black" }}
        >
          {sidePrices.map((price, index) => {
            return <SidePriceChart key={index} {...price} />;
          })}
        </Segment>
        <Segment
          style={{ "border-style": "none", "background-color": "black" }}
        >
          <SideBar
            currentChannel={this.props.currentChannel}
            currentUser={this.props.currentUser}
            isPrivateChannel={this.props.isPrivateChannel}
            filteredNews={this.props.news.filter(article => {
              return article.mentions === this.props.crypto.ticker;
            })}
          />
        </Segment>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  news: state.cryptos.news,
  crypto: state.cryptos.crypto,
  details: state.cryptos.details,
  prices: state.cryptos.prices
});

export default connect(mapStateToProps)(SideBarCont);
