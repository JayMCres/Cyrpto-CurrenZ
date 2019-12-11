import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Header, Icon } from "semantic-ui-react";

import NewsItem from "./NewsItem";

class NewsList extends Component {
  render() {
    const topNewsArticles = this.props.filteredNews.filter((item, index) => {
      return index < 15;
    });
    return (
      <div>
        <Header as="h2">
          <Icon name="newspaper outline" />
          <Header.Content>NEWSFEED</Header.Content>
        </Header>
        <Segment style={{ overflow: "auto", maxHeight: 500 }}>
          {topNewsArticles.map(item => {
            return <NewsItem key={item.title} {...item} />;
          })}
        </Segment>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   news: state.cryptos.news
// });

export default connect(null)(NewsList);
