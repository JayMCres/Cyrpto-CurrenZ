import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";
import Cards from "./Cards";
import { connect } from "react-redux";

class CardsCont extends Component {
  render() {
    console.log("Cards Cont Props", this.props);
    return (
      <Segment
        style={{
          "border-style": "double",
          "border-color": "blue"
          // "background-color": "black"
        }}
      >
        <Cards
          cards={this.props.cards.filter((card, index) => {
            return index < 50;
          })}
        />
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cryptos.cards[0]
});

export default connect(mapStateToProps)(CardsCont);
