import React, { Component } from "react";
import CryptoDetails from "./CryptoDetails";
import { Grid, Segment, Message } from "semantic-ui-react";
import SideBarCont from "./siderbar/SideBarCont";
// import { connect } from "react-redux";
export default class CryptoDetailsCont extends Component {
  render() {
    return (
      // <Segment inverted>
      <Grid columns={2} divided>
        <Grid.Column width={10}>
          <CryptoDetails showIndepthPage={this.props.showIndepthPage} />
        </Grid.Column>
        <Grid.Column width={6}>
          <SideBarCont
            currentChannel={this.props.currentChannel}
            currentUser={this.props.currentUser}
            isPrivateChannel={this.props.isPrivateChannel}
          />
        </Grid.Column>
      </Grid>
      // </Segment>
    );
  }
}

// export default connect(mapStateToProps)(CryptoDetailsCont);
