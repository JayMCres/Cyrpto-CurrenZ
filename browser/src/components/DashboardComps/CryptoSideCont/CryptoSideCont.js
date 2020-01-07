import React, { Component } from "react";
import CryptoSideDetails from "./CryptoSideDetails";
import WeeklyPriceChart from "./WeeklyPriceChart";
import { connect } from "react-redux";
import { Message, Segment } from "semantic-ui-react";
import UserProfile from "./UserProfile";
import CryptoLoading from "./CryptoLoading";
class CryptoSideCont extends Component {
  state = {
    showSideChart: false
  };

  renderSideChart = () => {
    return this.setState({ showSideChart: !this.state.showSideChart });
  };
  render() {
    const { currentUser } = this.props;

    return (
      <div style={{ "background-color": "black" }}>
        <Message color="violet">
          <UserProfile
            currentUser={currentUser}
            clearFavorites={this.props.clearFavorites}
          />
        </Message>
        {this.props.crypto === null ? (
          <CryptoLoading />
        ) : (
          <Segment style={{ "background-color": "black" }}>
            <Segment
              inverted
              style={{ "background-color": "black" }}
              attached="top"
            >
              <CryptoSideDetails
                {...this.props.crypto}
                renderSideChart={this.renderSideChart}
                showIndepthPage={this.props.showIndepthPage}
                prices={this.props.chartPrices}
              />
            </Segment>
            {!this.state.showSideChart ? (
              <Segment
                inverted
                style={{ "background-color": "black" }}
                centered
                attached="bottom"
              >
                {this.props.chartPrices.length === 0 ? (
                  <div>Loading...</div>
                ) : (
                  <WeeklyPriceChart prices={this.props.chartPrices} />
                )}
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
  prices: state.cryptos.prices,
  chartPrices: state.cryptos.monthlyPrices
});

export default connect(mapStateToProps)(CryptoSideCont);
