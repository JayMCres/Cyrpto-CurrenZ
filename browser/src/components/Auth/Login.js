import React, { Component } from "react";
import firebase from "../../config/firebase";
import app from "./App.css";
import {
  Grid,
  Form,
  Header,
  Message,
  Segment,
  Icon,
  Button
} from "semantic-ui-react";

import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  displayErrors = errors => {
    console.log(errors);
    return errors.map((error, i) => <p key={i}>{error.message}</p>);
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.formValid(this.state)) {
      this.setState({ errors: [], loading: true });

      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(signedInUser => {
          console.log(signedInUser);
        })
        .catch(err => {
          console.log(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          });
        });
    }
  };

  formValid = ({ email, password }) => {
    return password && email;
  };

  render() {
    const { email, password, loading } = this.state;

    return (
      <Grid
        className="app"
        textAlign="center"
        verticalAlign="middle"
        style={{
          "background-color": "black"
        }}
      >
        <Grid.Column style={{ width: 450 }}>
          <Header
            as="h2"
            icon
            style={{
              color: "#6666ff"
            }}
            textAlign="center"
          >
            <Icon
              name="btc"
              style={{
                color: "#6666ff"
              }}
            />
            Login to Crypto-Curren-Z
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment
              stacked
              style={{
                "border-style": "outset",
                "border-color": "#6666ff",
                "background-color": "black"
              }}
            >
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="E-mail"
                onChange={this.handleChange}
                value={email}
                type="email"
              />
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
                type="password"
              />
              <Button
                inverted
                color="violet"
                disabled={loading}
                className={loading ? "loading" : ""}
                fluid
                size="large"
              >
                Submit
              </Button>
            </Segment>
          </Form>
          {this.state.errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(this.state.errors)}
            </Message>
          )}
          <Message>
            Sign up for account?<Link to="/register">Sign-Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
