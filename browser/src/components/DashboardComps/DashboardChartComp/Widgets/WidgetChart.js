import React, { Component } from "react";
import ReactDOM from "react-dom";

class WidgetChart extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://widgets.cryptocompare.com/serve/v1/coin/header?fsym=${this.props.symbol.toUpperCase()}&tsyms=USD,EUR`;
    this.div.appendChild(script);
  }
  render() {
    return <div ref={el => (this.div = el)}></div>;
  }
}

export default WidgetChart;
