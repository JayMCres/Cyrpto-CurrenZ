import React, { Component } from "react";
import CryptoDetails from "./CryptoDetails";
import { Grid } from "semantic-ui-react";
import SideBarCont from "./siderbar/SideBarCont";
// import { connect } from "react-redux";
export default class CryptoDetailsCont extends Component {
  render() {
    // console.log("Details Conatiner", this.props);
    return (
      <Grid
        columns={2}
        divided
        style={{ "border-style": "none", "background-color": "black" }}
      >
        <Grid.Column width={10}>
          <CryptoDetails showIndepthPage={this.props.showIndepthPage} />
        </Grid.Column>
        <Grid.Column width={6}>
          <SideBarCont
            currentChannel={this.props.currentChannel}
            currentUser={this.props.currentUser}
            isPrivateChannel={this.props.isPrivateChannel}
            clearFavorites={this.props.clearFavorites}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
