import React, { Component } from "react";
import { List, Segment } from "semantic-ui-react";
import NewsFeed from "./NewsFeed";

export default class NewsFeeds extends Component {
  render() {
    // console.log("News Props", this.props.newsFeed.length);
    return (
      <Segment
        style={{
          overflow: "auto",
          maxHeight: 191,
          "background-color": "black"
        }}
      >
        <List divided relaxed>
          {this.props.newsFeed.map((item, index) => {
            return <NewsFeed index={index} key={item.id} {...item} />;
          })}
        </List>
      </Segment>
    );
  }
}
