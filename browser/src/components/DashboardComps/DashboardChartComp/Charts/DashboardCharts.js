import React, { Component } from "react";
import { Header, Grid, Image, List, Divider, Icon } from "semantic-ui-react";
import PriceChart from "./PriceChart";
import CapChart from "./CapChart";
import VolumeChart from "./VolumeChart";
import DashboardData from "./DashboardData";
const moment = require("moment");

export default class DashboardCharts extends Component {
  state = { priceData: [], capData: [], volumeData: [] };

  componentDidMount() {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${this.props.id}/market_chart?vs_currency=usd&days=30`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          priceData: data.prices.map(item => {
            let date = moment(item[0]).format("MMM DD YYYY");
            return { value: parseFloat(item[1]), date: date };
          }),
          volumeData: data.total_volumes.map(item => {
            let date = moment(item[0]).format("MMM DD YYYY");
            return { value: parseFloat(item[1]), date: date };
          }),
          capData: data.market_caps.map(item => {
            let date = moment(item[0]).format("MMM DD YYYY");
            return { value: item[1], date: date };
          })
        })
      );
  }
  render() {
    return (
      <div>
        <Grid
          style={{
            "background-color": "black"
          }}
        >
          <Grid.Row>
            <Grid.Column width={4}>
              <Header
                as="h2"
                style={{
                  color: "Blue"
                }}
              >
                <Image circular src={this.props.image} /> {this.props.name}
              </Header>
            </Grid.Column>
            <Grid.Column width={12} verticalAlign="middle">
              <DashboardData {...this.props} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider horizontal>
          <Header as="h4" style={{ color: "blue" }}>
            <Icon name="chart line" />
            Charts
          </Header>
        </Divider>

        <Grid
          centered
          // columns={3}
          columns="equal"
          divided
          style={{
            "background-color": "black"
          }}
        >
          <Grid.Column
            // floated="left"
            // width={5}
            style={{
              "background-color": "black"
            }}
          >
            <CapChart data={this.state.capData} />
          </Grid.Column>
          <Grid.Column
            // width={5}
            style={{
              "background-color": "black"
            }}
          >
            <VolumeChart data={this.state.volumeData} />
          </Grid.Column>
          <Grid.Column
            floated="right"
            // width={5}
            style={{
              "background-color": "black"
            }}
          >
            <PriceChart data={this.state.priceData} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
