import React, { Component } from "react";
import { Segment, Card, Button, Message } from "semantic-ui-react";
import Favorite from "./Favorite";

export default class FavoritesList extends Component {
  state = {
    startIdx: 0,
    endIdx: 5
  };

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 5,
        endIdx: prevState.endIdx + 5
      };
    });
  };

  showLess = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx - 5,
        endIdx: prevState.endIdx - 5
      };
    });
  };

  render() {
    // console.log("Index Container State", this.state.marketIndexes);

    // console.log("stockIndexItems", marketIndexItems);

    return (
      <div>
        <Message color="violet">
          <h3>Favorites</h3>
        </Message>
        <Segment inverted>
          <Button
            floated="left"
            onClick={() => this.showLess()}
            content="Back"
            icon="left arrow"
            labelPosition="left"
            disabled={this.state.startIdx === 0}
          />
          <Button
            floated="right"
            onClick={() => this.showMore()}
            content="Next"
            icon="right arrow"
            labelPosition="right"
            // disabled={this.state.endIdx === this.state.favorites.length + }
          />

          <Card.Group centered itemsPerRow={5}>
            {this.props.favorites.map(item => {
              return <Favorite key={item.id} {...item} />;
            })}
          </Card.Group>
        </Segment>
      </div>
    );
  }
}
