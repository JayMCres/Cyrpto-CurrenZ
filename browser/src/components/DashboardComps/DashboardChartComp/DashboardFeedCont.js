import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";
import DashboardCont from "./Charts/DashboardCont";
import DashboardFeedMenu from "./DashboardFeedMenu";
import ExchangeFeedCont from "./ExchangeFeed/ExchangeFeedCont";

export default class DashBoardFeedCont extends Component {
  state = { activeItem: "charts", chartsPage: "true" };
  showChartsPage = () => {
    return this.setState({
      chartsPage: !this.state.chartsPage
    });
  };

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, chartsPage: "true" });

  render() {
    const { activeItem } = this.state;
    const onMenuClick = link => {
      const MENU_PAGES = {
        charts: <DashboardCont />,
        feed: <ExchangeFeedCont />
      };
      return <div>{MENU_PAGES[link]}</div>;
    };
    // console.log("Exchanges Props", this.state);

    return (
      <Segment
        style={{
          "background-color": "black"
          // "border-style": "double",
          // "border-color": "#6666ff"
        }}
      >
        <Grid>
          <Grid.Column width={1}>
            <DashboardFeedMenu
              activeItem={activeItem}
              handleItemClick={this.handleItemClick}
              showChartsPage={this.showChartsPage}
            />
          </Grid.Column>
          <Grid.Column
            width={15}
            style={{
              "background-color": "black"
            }}
          >
            {this.state.chartsPage ? onMenuClick(activeItem) : null}
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
