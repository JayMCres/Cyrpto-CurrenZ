import React, { Component } from "react";

class WidgetChartTicker extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://widgets.cryptocompare.com/serve/v1/coin/chartscroller?fsyms=BTC,ETH,XMR,LTC,XRP,USDT,BCH,CRO,EOS,BNB,LINK,THX,BSV,XTP,KCS,ZRX,DOGE,PAX,KBC,ZEC,BTT,BAT&tsyms=USD";
    this.div.appendChild(script);
  }
  render() {
    return <div ref={el => (this.div = el)}></div>;
  }
}

export default WidgetChartTicker;
