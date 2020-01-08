import React, { Component } from "react";
import ReactDOM from "react-dom";

class WidgetTicker extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://widgets.cryptocompare.com/serve/v3/coin/header?fsyms=BTC,ETH,XMR,LTC,XRP,BCH,CRO,EOS,BNB,&tsyms=USD";
    this.div.appendChild(script);
  }
  render() {
    return <div ref={el => (this.div = el)}></div>;
  }
}

export default WidgetTicker;
