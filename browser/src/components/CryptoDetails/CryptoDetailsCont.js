import React, { Component } from "react";
import CryptoDetails from "./CryptoDetails";
import { Grid, Segment } from "semantic-ui-react";

export default class CryptoDetailsCont extends Component {
  render() {
    return (
      <Segment inverted>
        <Grid columns={2} divided>
          <Grid.Column width={10}>
            <CryptoDetails />
          </Grid.Column>
          <Grid.Column width={6}>Test</Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
