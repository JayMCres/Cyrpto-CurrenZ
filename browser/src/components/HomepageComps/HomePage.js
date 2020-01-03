import React, { Component } from "react";
import { Segment, Grid, Header } from "semantic-ui-react";
// import { connect } from "react-redux";

import CryptosDashboard from "../DashboardComps/CryptosDashboard";
// import Exchanges from "../DashboardComps/ExchangeComps/ExchangeCont";

class HomePage extends Component {
  render() {
    // console.log("homepage State", this.state);

    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <Header as="h2" style={{ color: "white" }} floated="right">
          <Icon name="bity" />
          Crypto-Curren-Z
        </Header>

        <CryptosDashboard currentUser={this.props.currentUser} />
      </Segment>
    );
  }
}

// export default connect(null)(HomePage);
export default HomePage;
