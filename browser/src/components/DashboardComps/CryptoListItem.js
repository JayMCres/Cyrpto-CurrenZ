import React, { Component } from "react";
import { Card, Image, Button, Statistic } from "semantic-ui-react";

export default class CryptoListItem extends Component {
  state = {
    currentPrice: [],
    pastPrice: []
  };

  componentDidMount() {
    this.timer = setInterval(() => this.setCryptoPrice(), 3000);
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  setCryptoPrice = () => {
    this.setState({
      currentPrice: this.props.price,
      pastPrice: this.state.currentPrice
    });
  };

  handlePriceChange = () => {
    if (this.state.currentPrice > this.state.pastPrice) {
      return "#7FFF00";
    } else if (this.state.currentPrice < this.state.pastPrice) {
      return "red";
    } else {
      return "black";
    }
  };
  render() {
    console.log("Crypto Item Props", this.props);
    return (
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={`http://cryptocompare.com/${this.props.image}`}
          />
          <Card.Header>{this.props.company}</Card.Header>
          <Card.Meta>{this.props.ticker}</Card.Meta>
          <Card.Description>
            <Statistic size="tiny">
              <Statistic.Value style={{ color: this.handlePriceChange() }}>
                {this.props.price}
              </Statistic.Value>
              {/* <Statistic.Label>Price($)</Statistic.Label> */}
            </Statistic>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
