import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import FavoritesList from "./FavoritesList";

export default class FavoritesCont extends Component {
  render() {
    return (
      <Segment inverted>
        <FavoritesList favorites={this.props.favorites} />
      </Segment>
    );
  }
}
