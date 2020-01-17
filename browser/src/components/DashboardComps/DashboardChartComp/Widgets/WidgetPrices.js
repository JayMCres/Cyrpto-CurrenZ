import React, { Component } from "react";

class WidgetPrices extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://widgets.cryptocompare.com/serve/v2/coin/header?fsyms=BTC,ETH,XRP,LTC,EOS,BCH&tsyms=USD,EUR,CNY,GBP`;
    this.div.appendChild(script);
  }
  render() {
    return <div ref={el => (this.div = el)}></div>;
  }
}

export default WidgetPrices;
