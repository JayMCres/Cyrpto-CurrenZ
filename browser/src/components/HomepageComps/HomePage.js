import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";
// import { connect } from "react-redux";

import CryptosDashboard from "../DashboardComps/CryptosDashboard";
// import Exchanges from "../DashboardComps/ExchangeComps/ExchangeCont";

class HomePage extends Component {
  render() {
    console.log("homepage State", this.state);

    return (
      <Segment inverted>
        <CryptosDashboard />
      </Segment>
    );
  }
}

// export default connect(null)(HomePage);
export default HomePage;
