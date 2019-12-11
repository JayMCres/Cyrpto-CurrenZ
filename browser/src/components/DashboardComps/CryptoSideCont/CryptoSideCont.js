import React, { Component } from "react";
import CryptoSideDetails from "./CryptoSideDetails";
import WeeklyPriceChart from "./WeeklyPriceChart";
import { connect } from "react-redux";
import { Message, Segment } from "semantic-ui-react";
import UserProfile from "./UserProfile";
class CryptoSideCont extends Component {
  state = {
    showSideChart: false
  };

  renderSideChart = () => {
    return this.setState({ showSideChart: !this.state.showSideChart });
  };
  render() {
    const { currentUser } = this.props;
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
        <Message color="orange">
          <UserProfile currentUser={currentUser} />
        </Message>
        {this.props.crypto === null ? (
          <Message color="blue">Click Crypto</Message>
        ) : (
          <Segment inverted>
            <Segment inverted attached="top">
              <CryptoSideDetails
                {...this.props.crypto}
                renderSideChart={this.renderSideChart}
              />
            </Segment>
            {!this.state.showSideChart ? (
              <Segment inverted centered attached="bottom">
                {sidePrices.map((price, index) => {
                  return (
                    <WeeklyPriceChart
                      key={index}
                      {...price}
                      crypto={this.props.crypto}
                    />
                  );
                })}
              </Segment>
            ) : null}
          </Segment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  crypto: state.cryptos.crypto,
  details: state.cryptos.details,
  prices: state.cryptos.prices
});

export default connect(mapStateToProps)(CryptoSideCont);
