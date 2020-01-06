import React, { Component } from "react";
import { Segment, Header, Grid, Image, List, Message } from "semantic-ui-react";
import PriceChart from "./PriceChart";
import CapChart from "./CapChart";
import VolumeChart from "./VolumeChart";
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
    console.log("Exchanges Chart Props", this.state);
    return (
      <div
        style={{
          // "border-style": "double",
          // "border-color": "blue",
          "background-color": "black"
        }}
      >
        <Header
          as="h4"
          dividing
          style={{
            color: "blue"
          }}
        >
          <Image circular src={this.props.image} />
          {this.props.name}
          <List bulleted horizontal floated="right">
            <List.Item>
              <b
                style={{
                  color: "white",
                  "font-size": "10px"
                }}
              >
                Market Cap|
                <a
                  style={{
                    "font-size": "15px"
                  }}
                >
                  {(this.props.market_cap / 1000000).toLocaleString("us-EN", {
                    style: "currency",
                    currency: "USD"
                  })}
                </a>{" "}
              </b>
            </List.Item>
            <List.Item>
              <b
                style={{
                  color: "white",
                  "font-size": "10px"
                }}
              >
                Volume|
                <a
                  style={{
                    "font-size": "15px"
                  }}
                >
                  {this.props.total_volume}
                </a>{" "}
              </b>
            </List.Item>
            <List.Item>
              <b
                style={{
                  color: "white",
                  "font-size": "10px"
                }}
              >
                Price|
                <a
                  style={{
                    "font-size": "15px"
                  }}
                >
                  {this.props.current_price.toLocaleString("us-EN", {
                    style: "currency",
                    currency: "USD"
                  })}
                </a>{" "}
              </b>
            </List.Item>

            <List.Item>
              <b
                style={{
                  color: "white",
                  "font-size": "10px"
                }}
              >
                Change 24hrs|
                <a
                  style={{
                    "font-size": "15px"
                  }}
                >
                  {this.props.price_change_percentage_24h}%
                </a>{" "}
              </b>
            </List.Item>
            <List.Item>
              <b
                style={{
                  color: "white",
                  "font-size": "10px"
                }}
              >
                Supply |{" "}
                <a
                  style={{
                    "font-size": "15px"
                  }}
                >
                  {this.props.circulating_supply}
                </a>
              </b>
            </List.Item>
          </List>
        </Header>

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
