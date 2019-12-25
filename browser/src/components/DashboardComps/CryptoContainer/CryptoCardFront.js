import React, { Component } from "react";
import { Card, Image, Button, Statistic, Message } from "semantic-ui-react";
export default class CryptoCardFront extends Component {
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
    console.log("CryptoCardFront", this.props);
    return (
      <Card
        style={{ "border-style": "double", "border-color": "MediumSlateBlue" }}
      >
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={`http://cryptocompare.com/${this.props.details.image}`}
            onClick={() => this.props.handleCardFlip()}
          />
          <Card.Header>{this.props.details.company}</Card.Header>
          <Card.Meta>{this.props.details.ticker}</Card.Meta>
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
          <br></br>
          <div className="ui two buttons">
            <Button
              basic
              color="violet"
              // onClick={() => this.props.addCryptoToFavorites(this.props.id)}
              onClick={() => this.props.handleFavoriteClick()}
            >
              Add to Favorite
            </Button>
            <Button
              basic
              color="violet"
              onClick={() => this.props.handleCryptoRenderClick()}
            >
              Crypto Details
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
