import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Image,
  Statistic,
  Segment,
  Icon,
  Message,
  Label
} from "semantic-ui-react";
import HistoricalPrices from "./pricetable/HistoricalPrices";
import CryptoPriceChart from "./CryptoPriceChart";
import ChartMenu from "./ChartMenu";
class CryptoDetails extends Component {
  state = { activeItem: "month" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderMonthChart = () => {
    if (this.props.monthlyPrices.length === 0) {
      return <Message>Loading</Message>;
    } else {
      return <CryptoPriceChart chartPrices={this.props.monthlyPrices} />;
    }
  };
  renderThreeMonthChart = () => {
    if (this.props.threeMonthsPrices.length === 0) {
      return <Message>Loading</Message>;
    } else {
      return <CryptoPriceChart chartPrices={this.props.threeMonthsPrices} />;
    }
  };

  renderSixMonthChart = () => {
    if (this.props.sixMonthsPrices.length === 0) {
      return <Message>Loading</Message>;
    } else {
      return <CryptoPriceChart chartPrices={this.props.sixMonthsPrices} />;
    }
  };

  renderAnnualChart = () => {
    if (this.props.annualPrices.length === 0) {
      return <Message>Loading</Message>;
    } else {
      return <CryptoPriceChart chartPrices={this.props.annualPrices} />;
    }
  };

  render() {
    console.log("Crypto Details", this.props);

    const onChartMenuClick = link => {
      const CHART_PAGES = {
        month: this.renderMonthChart(),
        threemonth: this.renderThreeMonthChart(),
        sixmonth: this.renderSixMonthChart(),
        annual: this.renderAnnualChart()
      };
      return <div>{CHART_PAGES[link]}</div>;
    };

    return (
      <div style={{ "border-style": "none", "background-color": "black" }}>
        <Segment
          style={{
            "background-color": "#6666ff",
            "border-style": "double",
            "border-color": "#e6e6ff"
          }}
        >
          <Label as="a" corner="right" color="red">
            <Icon name="remove" onClick={() => this.props.showIndepthPage()} />
          </Label>

          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={4}>
                <Segment style={{ "background-color": "#e6e6ff" }}>
                  <Image
                    src={`http://cryptocompare.com/${this.props.crypto.image}`}
                    size="small"
                    circular
                    centered
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment style={{ "background-color": "#e6e6ff" }}>
                  <Statistic size="mini">
                    <Statistic.Value>{this.props.crypto.price}</Statistic.Value>
                    <Statistic.Label>Price</Statistic.Label>
                  </Statistic>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment style={{ "background-color": "#e6e6ff" }}>
                  <Statistic size="mini">
                    <Statistic.Value>
                      {this.props.crypto.MKTCAP}
                    </Statistic.Value>
                    <Statistic.Label>Capitalization</Statistic.Label>
                  </Statistic>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment style={{ "background-color": "#e6e6ff" }}>
                  <Statistic size="mini">
                    <Statistic.Value>
                      {this.props.crypto.SUPPLY}
                    </Statistic.Value>
                    <Statistic.Label>Supply</Statistic.Label>
                  </Statistic>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment
          attached
          secondary
          style={{
            "background-color": "black",
            "border-style": "double",
            "border-color": "#6666ff"
          }}
        >
          <Message color="violet">{this.props.details.description}</Message>
        </Segment>
        <Segment
          inverted
          attached="middle"
          style={{
            "background-color": "black",
            "border-style": "double",
            "border-color": "#6666ff"
          }}
        >
          <ChartMenu
            handleItemClick={this.handleItemClick}
            activeItem={this.state.activeItem}
          />
          <Segment
            inverted
            style={{ "border-style": "none", "background-color": "black" }}
          >
            {onChartMenuClick(this.state.activeItem)}
          </Segment>
        </Segment>
        <Segment
          inverted
          style={{
            "background-color": "black",
            "border-style": "double",
            "border-color": "#6666ff"
          }}
          attached="bottom"
        >
          {this.props.historicals.length === 0 ? (
            <Message>Loading</Message>
          ) : (
            <HistoricalPrices historicals={this.props.historicals} />
          )}
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  crypto: state.cryptos.crypto,
  details: state.cryptos.details,
  historicals: state.cryptos.historicals[0],
  monthlyPrices: state.cryptos.monthlyPrices,
  threeMonthsPrices: state.cryptos.threeMonthsPrices,
  sixMonthsPrices: state.cryptos.sixMonthsPrices,
  annualPrices: state.cryptos.annualPrices
});

export default connect(mapStateToProps)(CryptoDetails);
