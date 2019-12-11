import React, { Component } from "react";
import { Image, Grid, List, Message } from "semantic-ui-react";

import Linkify from "react-linkify";

export default class NewsItem extends Component {
  render() {
    // console.log("news Props", this.props);
    const source = this.props.source.toUpperCase();
    return (
      <Message floated="left" size="mini" info>
        <List divided verticalAlign="middle">
          <List.Item>
            {/* <List.Content floated='right'> */}
            <Grid columns={2} compact divided>
              <Grid.Row>
                <Grid.Column verticalAlign="middle" width={2}>
                  <Image
                    // verticalAlign="middle"
                    spaced
                    // floated="left"
                    size="tiny"
                    src={this.props.img}
                    // style={{ margin: "2em 2em 2em -4em" }}
                  />
                </Grid.Column>
                <Grid.Column width={14}>
                  <Message.Header>
                    {source}:{this.props.title}
                  </Message.Header>
                  <br />
                  <div>{this.props.date}</div>
                  <br />
                  {/* <p>{this.props.body}</p> */}
                  <Message.Header>
                    <Linkify>Source:{this.props.url}</Linkify>
                  </Message.Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </List.Item>
        </List>
      </Message>
    );
  }
}
