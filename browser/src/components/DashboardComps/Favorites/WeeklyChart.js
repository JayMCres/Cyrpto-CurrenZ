import React, { Component } from "react";
import {
  Card,
  Label,
  Icon,
  Segment,
  Image,
  Message,
  Header
} from "semantic-ui-react";
import Chart from "react-google-charts";

export default class WeeklyChart extends Component {
  state = {
    disableButton: false
  };

  handleDisable = () => {
    this.setState({
      disableButton: true
    });
  };

  handleClick = async () => {
    await this.props.removeCryptoFromFavorites(this.props.dayOne.id);
    this.setState({
      disableButton: true
    });
  };

  render() {
    // console.log("Weekly Chart Props", this.state);
    const options = {
      // title: this.props.dayOne.ticker,
      // chartArea: { width: "100%" },
      // legend: { textStyle: { color: "#00FF00" }, position: "bottom" },
      // backgroundColor: "black",
      backgroundColor: { fill: "transparent" },
      hAxis: {
        textStyle: { color: "#00FF00" }
      },
      vAxis: {
        textStyle: { color: "#00FF00" }
      }
    };

    return (
      <Message color="black">
        <Label size="mini" as="a" corner="right" color="red">
          <Icon
            name="remove"
            onClick={this.handleClick}
            disabled={this.state.disableButton === true}
          />
        </Label>
        {/* <Header as="h4" inverted color="violet"> */}
        <div>
          <Image
            avatar
            src={`http://cryptocompare.com/${this.props.dayOne.image}`}
          />
          <span>{this.props.dayOne.company}</span>
        </div>
        {/* </Header> */}
        <Chart
          // chartType="LineChart",
          chartType="AreaChart"
          // width="350px"
          width="100%"
          height="200px"
          data={[
            ["Date", "Price"],
            [this.props.dayOne.d, this.props.dayOne.y],
            [this.props.dayTwo.d, this.props.dayTwo.y],
            [this.props.dayThree.d, this.props.dayThree.y],
            [this.props.dayFour.d, this.props.dayFour.y],
            [this.props.dayFive.d, this.props.dayFive.y]
          ]}
          loader={<div>Loading Chart</div>}
          options={options}

          // rows={rows}
          // columns={columns}
        />
      </Message>
      // </Card>
    );
  }
}
