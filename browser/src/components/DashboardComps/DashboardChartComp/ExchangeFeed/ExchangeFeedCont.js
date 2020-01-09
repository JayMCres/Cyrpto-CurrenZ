import React, { Component } from "react";
import { List, Header, Icon, Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import ExchangeFeeds from "./ExchangeFeeds";
import NewsFeeds from "./NewsFeeds";
class ExchangeFeedCont extends Component {
  render() {
    return (
      <Grid
        columns={2}
        divided
        style={{
          "background-color": "black"
        }}
      >
        <Grid.Column
          floated="left"
          width={6}
          style={{
            "background-color": "black"
          }}
        >
          <Header as="h3" dividing inverted>
            <Icon name="industry" />
            <Header.Content>
              Exchanges
              {/* <Header.Subheader>Data Feed</Header.Subheader> */}
            </Header.Content>
          </Header>
          <Segment
            style={{
              "background-color": "black",
              "border-style": "double",
              "border-color": "orange",
              "border-width": "1px"
            }}
          >
            <ExchangeFeeds exchanges={this.props.exchangeFeed} />
          </Segment>
        </Grid.Column>
        <Grid.Column
          floated="right"
          width={10}
          style={{
            "background-color": "black"
          }}
        >
          <Header as="h3" dividing inverted>
            <Icon name="newspaper outline" />
            <Header.Content>
              News Feed
              {/* <Header.Subheader>Articles</Header.Subheader> */}
            </Header.Content>
          </Header>
          <Segment
            style={{
              "background-color": "black",
              "border-style": "double",
              "border-color": "orange",
              "border-width": "1px"
            }}
          >
            <NewsFeeds newsFeed={this.props.newsFeed} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  exchangeFeed: state.exchanges.exchangeFeed,
  newsFeed: state.cryptos.feed
});

export default connect(mapStateToProps)(ExchangeFeedCont);
