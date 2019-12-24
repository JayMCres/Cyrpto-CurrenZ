import React, { Component } from "react";
import { Card, Segment, List, Image, Label, Icon } from "semantic-ui-react";
// import { connect } from "react-redux";
// import WeeklyChart from "./WeeklyChart";

// import { fetchWeekly } from "../../../actions/cryptos";

class Favorite extends Component {
  render() {
    // console.log("Favorite card", this.state);

    return (
      <Card>
        <List>
          <Label size="mini" as="a" corner="right" color="red">
            <Icon
              name="remove"
              onClick={() =>
                this.props.removeCryptoFromFavorites(this.props.id)
              }
            />
          </Label>
          <List.Item>
            <Image
              avatar
              src={`http://cryptocompare.com/${this.props.details.image}`}
            />
            <List.Content>
              <List.Header as="a">{this.props.details.ticker}</List.Header>
              <List.Description>
                <a>
                  <h3>
                    <b>{this.props.details.company}</b>
                  </h3>
                </a>
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Card>
    );
  }
}

// export default connect(null)(Favorite);
export default Favorite;
