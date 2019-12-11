import React, { Component } from "react";
import { connect } from "react-redux";
import CryptosDashboard from "./components/DashboardComps/CryptosDashboard";

class App extends Component {
  render() {
    // console.log("APP", this.props.currentUser);
    const { currentUser } = this.props;
    return <CryptosDashboard currentUser={currentUser} />;
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

export default connect(mapStateToProps)(App);
