import React, { Component } from "react";
import { connect } from "react-redux";
// import HomePage from "./components/HomepageComps/HomePage";

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
      <CryptosDashboard
        currentUser={currentUser}
        favoritesRef={this.state.favoritesRef}
      />
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

export default connect(mapStateToProps)(App);
