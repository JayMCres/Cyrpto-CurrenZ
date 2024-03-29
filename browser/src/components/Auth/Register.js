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
import md5 from "md5";
import { Link } from "react-router-dom";
import app from "./App.css";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    loading: false,
    usersRef: firebase.database().ref("users")
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formValid = () => {
    let errors = [];
    let error;
    if (this.formEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.passwordValid(this.state)) {
      error = { message: "Password Invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  formEmpty = ({ username, email, password, passwordConfirmation }) => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  passwordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = errors => {
    console.log(errors);
    return errors.map((error, i) => <p key={i}>{error.message}</p>);
  };

  handleRegSubmit = event => {
    event.preventDefault();
    if (this.formValid()) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createdUser => {
          // console.log(createdUser);
          createdUser.user
            .updateProfile({
              displayName: this.state.username,
              photoURL: `http://www.gravatar.com/avatar/${md5(
                createdUser.user.email
              )}?d=identicon`
            })
            .then(() => {
              this.saveUser(createdUser).then(() => {
                console.log("User Saved");
              });
            });
        })
        .catch(err => {
          console.error(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          });
        });
    }
  };

  saveUser = createdUser => {
    return this.state.usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL
    });
  };

  handleErrors = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName))
      ? "Error"
      : "";
  };
  render() {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      errors,
      loading
    } = this.state;
    return (
      <Grid
        textAlign="center"
        verticalAlign="middle"
        className="app"
        style={{
          "background-color": "black"
        }}
        // style={{ width: 250 }}
      >
        <Grid.Column style={{ width: 450 }}>
          <Header
            as="h2"
            icon
            style={{
              color: "#66ff33"
            }}
            textAlign="center"
          >
            <Icon
              name="bitcoin"
              style={{
                color: "#66ff33"
              }}
            />
            Register For Crypto-Curren-Z
          </Header>
          <Form onSubmit={this.handleRegSubmit} size="large">
            <Segment
              stacked
              style={{
                "border-style": "outset",
                "border-color": "#66ff33",
                "background-color": "black"
              }}
            >
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={this.handleChange}
                value={username}
                className={this.handleErrors(errors, "username")}
                type="text"
              />
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="E-mail"
                onChange={this.handleChange}
                value={email}
                className={this.handleErrors(errors, "email")}
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
                className={this.handleErrors(errors, "password")}
                type="password"
              />
              <Form.Input
                fluid
                name="passwordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
                value={passwordConfirmation}
                className={this.handleErrors(errors, "password")}
                type="password"
              />
              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                inverted
                color="black"
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
            Already a User?<Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
