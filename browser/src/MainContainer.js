import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";
import HomePage from "./components/HomepageComps/HomePage";

// import CryptosDashboard from "./components/DashboardComps/CryptoContainer/CryptosDashboard";
export default class MainContainer extends Component {
  render() {
    // console.log("Main State", this.state);
    return (
      // <Segment inverted>
      <HomePage />
      // </Segment>
    );
  }
}
