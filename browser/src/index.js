import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import firebase from "./config/firebase";

import App from "./App";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.css";

// import { Provider } from "react-redux";
// import store from "./store/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/");
      }
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}
const RootWithAuth = withRouter(Root);
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Router>
    <RootWithAuth />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
