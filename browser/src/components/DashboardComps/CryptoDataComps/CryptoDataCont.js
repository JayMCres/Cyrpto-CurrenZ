import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import ExchangeCont from "./Exchanges/ExchangeCont";
import RatesCont from "./Rates/RatesCont";
import { fetchRates } from "../../../actions/rates";
import { fetchExchanges } from "../../../actions/cryptos";
import { fetchMarketData, fetchVolumeData } from "../../../actions/global";
import { connect } from "react-redux";
import CryptoDataMenu from "./CryptoDataMenu";
import MarketCapCont from "./MarketCap/MarketCapCont";
// import VolumeCont from "./Volume/VolumeCont";
import MarketsCont from "./markets/MarketsCont";
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
        // volume: <VolumeCont />,
        markets: <MarketsCont />
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
        <CryptoDataMenu
          activeItem={activeItem}
          handleItemClick={this.handleItemClick}
        />
        {onMainMenuClick(activeItem)}
      </Segment>
    );
  }
}

export default connect(null)(CryptoDataCont);
