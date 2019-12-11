import React, { Component } from "react";
import firebase from "../../config/firebase";

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
      <Segment style={{ maxwidth: 350 }}>
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column>
            <Header as="h2" icon color="violet" textAlign="center">
              <Icon name="code branch" color="violet" />
              Login to Crypto-Curren-Z
            </Header>
            <Form onSubmit={this.handleSubmit} size="large">
              <Segment stacked>
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
                  disabled={loading}
                  className={loading ? "loading" : ""}
                  color="violet"
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
      </Segment>
    );
  }
}
