import React, { Component } from "react";
import { Segment, Grid, Icon, Label } from "semantic-ui-react";
import DashboardCont from "./Charts/DashboardCont";
import DashboardFeedMenu from "./DashboardFeedMenu";
import ExchangeFeedCont from "./ExchangeFeed/ExchangeFeedCont";
import WidgetCont from "./Widgets/WidgetCont";

export default class DashBoardFeedCont extends Component {
  state = { activeItem: "charts" };

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, chartsPage: "true" });

  render() {
    const { activeItem } = this.state;
    const onMenuClick = link => {
      const MENU_PAGES = {
        charts: <DashboardCont />,
        feed: <ExchangeFeedCont />,
        widget: <WidgetCont />
      };
      return <div>{MENU_PAGES[link]}</div>;
    };
    // console.log("Exchanges Props", this.state);

    return (
      <Segment
        style={{
          "background-color": "black",
          "border-style": "double",
          "border-color": "orange",
          "border-width": "1px"
        }}
      >
        <Label as="a" corner="right" color="red">
          <Icon name="remove" onClick={this.props.showChartsPage} />
        </Label>

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
            <div>{onMenuClick(activeItem)}</div>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
