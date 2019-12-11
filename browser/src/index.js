import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { Provider, connect } from "react-redux";
// import store from "./store/index";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { setUser, clearUser } from "./actions/auth";

import "semantic-ui-css/semantic.css";

import App from "./App";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import firebase from "./config/firebase";
import Spinner from "./Spinner";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, createLogger({ collapsed: true })))
);
class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log(user);
        this.props.setUser(user);
        this.props.history.push("/");
      } else {
        this.props.history.push("/login");
        this.props.clearUser();
      }
    });
  }
  render() {
    return this.props.loading ? (
      <Spinner />
    ) : (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}

const mapStateFromProps = state => ({ loading: state.users.loading });

const RootWithAuth = withRouter(
  connect(mapStateFromProps, { setUser, clearUser })(Root)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,

  document.getElementById("root")
);
