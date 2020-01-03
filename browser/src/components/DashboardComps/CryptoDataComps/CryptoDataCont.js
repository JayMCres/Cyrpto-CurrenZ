import React, { Component } from "react";
import { Segment, Menu, Header, Icon, Image, Grid } from "semantic-ui-react";
import ExchangeCont from "./Exchanges/ExchangeCont";
import RatesCont from "./Rates/RatesCont";
import { fetchRates } from "../../../actions/rates";
import { fetchExchanges } from "../../../actions/cryptos";
import { fetchMarketData, fetchVolumeData } from "../../../actions/global";
import { connect } from "react-redux";
import ExchangeRateMenu from "./CryptoDataMenu";
import MarketCapCont from "./MarketCap/MarketCapCont";
import VolumeCont from "./Volume/VolumeCont";

class CryptoDataCont extends Component {
  state = { activeItem: "exchanges" };

  componentDidMount() {
    this.props.dispatch(fetchRates());
    this.props.dispatch(fetchExchanges());
    this.props.dispatch(fetchMarketData());
    this.props.dispatch(fetchVolumeData());
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const onMainMenuClick = link => {
      const HOME_PAGES = {
        exchanges: <ExchangeCont />,
        rates: <RatesCont />,
        market: <MarketCapCont />,
        volume: <VolumeCont />
      };
      return <div>{HOME_PAGES[link]}</div>;
    };
    // console.log("Exchanges Props", this.state);

    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <Segment
          inverted
          style={{
            "background-color": "black"
          }}
        >
          <Header as="h2" style={{ color: "white" }} floated="right">
            <Icon name="bity" />
            Crypto-Curren-Z
          </Header>
          <ExchangeRateMenu
            activeItem={activeItem}
            handleItemClick={this.handleItemClick}
          />
          {onMainMenuClick(activeItem)}
        </Segment>
        {/* <Grid>
          <Grid.Column width={14} verticalAlign="middle">
            {onMainMenuClick(activeItem)}
          </Grid.Column>
          <Grid.Column width={2} centered>
            <ExchangeRateMenu
              activeItem={activeItem}
              handleItemClick={this.handleItemClick}
            />
          </Grid.Column>
        </Grid> */}
      </Segment>
    );
  }
}

export default connect(null)(CryptoDataCont);
