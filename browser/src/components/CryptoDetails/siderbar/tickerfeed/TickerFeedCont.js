import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Segment, Icon, Message } from "semantic-ui-react";
import TickerFeed from "./TickerFeed";

class TickerFeedCont extends Component {
  render() {
    // console.log("GlobalCont Props", this.props);

    return (
      <Segment
        style={{
          "border-style": "double",
          "border-color": "#6666ff",
          "background-color": "black"
        }}
      >
        <Message color="violet">
          <Header as="h2">
            <Icon name="chart line" />
            <Header.Content>
              Crypto Feed
              <Header.Subheader>Key Price Data</Header.Subheader>
            </Header.Content>
          </Header>
        </Message>
        <TickerFeed feedData={this.props.feedData} />
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  feedData: state.cryptos.globalData
});

export default connect(mapStateToProps)(TickerFeedCont);
