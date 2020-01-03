import React, { Component } from "react";
import { connect } from "react-redux";
// import HomePage from "./components/HomepageComps/HomePage";
import { Segment, Header, Icon } from "semantic-ui-react";
import CryptosDashboard from "./components/DashboardComps/CryptosDashboard";

import firebase from "./config/firebase";
class App extends Component {
  state = {
    favoritesRef: firebase.database().ref("favorites")
  };

  render() {
    // console.log("APP", this.props.currentUser);
    const { currentUser } = this.props;
    return (
      // <Segment
      //   style={{
      //     "background-color": "black"
      //   }}
      // >
      //   <Segment
      //     style={{
      //       "background-color": "black"
      //     }}
      //   >
      //     <Header as="h2" style={{ color: "white" }} floated="right">
      //       <Icon name="bity" />
      //       Crypto-Curren-Z
      //     </Header>
      //   </Segment>

      <CryptosDashboard
        currentUser={currentUser}
        favoritesRef={this.state.favoritesRef}
      />
      // </Segment>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

export default connect(mapStateToProps)(App);
