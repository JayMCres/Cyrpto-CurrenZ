import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";

import { connect } from "react-redux";
import NewsList from "./NewsList";
import UserProfile from "../DashboardComps/CryptoSideCont/UserProfile";
class SideBarCont extends Component {
  render() {
    console.log("Side", this.props);

    return (
      <Segment inverted>
        <Segment>
          <UserProfile currentUser={this.props.currentUser} />
        </Segment>
        <Segment>
          <NewsList
            filteredNews={this.props.news.filter(article => {
              return article.mentions === this.props.crypto.ticker;
            })}
          />
        </Segment>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  news: state.cryptos.news,
  crypto: state.cryptos.crypto
  // details: state.cryptos.details,
  // historicals: state.cryptos.historicals
});

export default connect(mapStateToProps)(SideBarCont);
