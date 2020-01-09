import React, { Component } from "react";
import { Card, Image, Button, Statistic } from "semantic-ui-react";
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
      return "grey";
    }
  };
  render() {
    // console.log("CryptoCardFront", this.props);
    return (
      <Card
        style={{
          "background-color": "black"
        }}
      >
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={`http://cryptocompare.com/${this.props.details.image}`}
            onClick={() => this.props.handleCardFlip()}
          />
          <Card.Header
            style={{
              color: "#6666ff"
            }}
          >
            {this.props.details.company}
          </Card.Header>
          <Card.Meta
            style={{
              color: "#6666ff"
            }}
          >
            {this.props.details.ticker}
          </Card.Meta>
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
              size="small"
              style={{
                color: "#6666ff",
                "border-color": "#6666ff",
                "border-style": "double",
                "background-color": "black"
              }}
              // onClick={() => this.props.addCryptoToFavorites(this.props.id)}
              onClick={() => this.props.handleFavoriteClick()}
            >
              Add to Favorite
            </Button>
            <Button
              size="small"
              style={{
                color: "#6666ff",
                "border-color": "#6666ff",
                "border-style": "double",
                "background-color": "black"
              }}
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
