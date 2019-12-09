import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";
import CryptosDashboard from "../DashboardComps/CryptosDashboard";

export default class HomePage extends Component {
  render() {
    return (
      <Segment inverted>
        <Grid columns={2} divided>
          <Grid.Column width={14}>
            <CryptosDashboard />
          </Grid.Column>
          <Grid.Column width={2}>Test</Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
