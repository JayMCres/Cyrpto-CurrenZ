import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Image,
  Statistic,
  Segment,
  Icon,
  Message,
  Label,
  Input
} from "semantic-ui-react";
import TableCont from "./pricetable/TableCont";
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
      <div>
        <Segment>
          <Label as="a" corner="right" color="red">
            <Icon name="remove" onClick={() => this.props.showIndepthPage()} />
          </Label>

          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={4}>
                <Segment>
                  <Image
                    src={`http://cryptocompare.com/${this.props.crypto.image}`}
                    size="small"
                    circular
                    centered
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment>
                  <Statistic size="small">
                    <Statistic.Value>
                      <Icon name="btc" />
                      {this.props.crypto.price}
                    </Statistic.Value>
                    <Statistic.Label>Price</Statistic.Label>
                  </Statistic>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment>
                  <Statistic size="small">
                    <Statistic.Value>{this.props.crypto.mkcap}</Statistic.Value>
                    <Statistic.Label>Capitalization</Statistic.Label>
                  </Statistic>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment>
                  <Statistic size="small">
                    <Statistic.Value>
                      {this.props.crypto.supply}
                    </Statistic.Value>
                    <Statistic.Label>Supply</Statistic.Label>
                  </Statistic>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment attached secondary>
          <Message color="violet">{this.props.details.description}</Message>
        </Segment>
        <Segment attached="middle">
          <ChartMenu
            handleItemClick={this.handleItemClick}
            activeItem={this.state.activeItem}
          />
          <Segment inverted>{onChartMenuClick(this.state.activeItem)}</Segment>
        </Segment>
        <Segment attached="bottom">
          {this.props.historicals.length === 0 ? (
            <Message>Loading</Message>
          ) : (
            <TableCont historicals={this.props.historicals} />
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
  monthlyPrices: state.cryptos.monthlyPrices.filter((obj, index) => {
    return index > state.cryptos.monthlyPrices.length - 31;
  }),
  threeMonthsPrices: state.cryptos.monthlyPrices.filter((obj, index) => {
    return index > state.cryptos.monthlyPrices.length - 91;
  }),
  sixMonthsPrices: state.cryptos.monthlyPrices.filter((obj, index) => {
    return index > state.cryptos.monthlyPrices.length - 181;
  }),
  annualPrices: state.cryptos.monthlyPrices.filter((obj, index) => {
    return index > state.cryptos.monthlyPrices.length - 366;
  })
});

export default connect(mapStateToProps)(CryptoDetails);
