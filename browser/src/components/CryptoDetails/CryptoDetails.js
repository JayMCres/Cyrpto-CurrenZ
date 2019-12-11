import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Image,
  Statistic,
  Segment,
  Icon,
  Message,
  Label
} from "semantic-ui-react";
import NewsList from "./NewsList";
class CryptoDetails extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Label as="a" corner="right" color="red">
            <Icon name="remove" onClick={() => this.props.showIndepthPage()} />
          </Label>

          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={4}>
                <Segment>
                  <Image
                    src={`http://cryptocompare.com/${this.props.crypto.image}`}
                    size="small"
                    circular
                    centered
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment>
                  <Statistic size="small">
                    <Statistic.Value>
                      <Icon name="btc" />
                      {this.props.crypto.price}
                    </Statistic.Value>
                    <Statistic.Label>Price</Statistic.Label>
                  </Statistic>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment>
                  <Statistic size="small">
                    <Statistic.Value>{this.props.crypto.mkcap}</Statistic.Value>
                    <Statistic.Label>Capitalization</Statistic.Label>
                  </Statistic>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment>
                  <Statistic size="small">
                    <Statistic.Value>
                      {this.props.crypto.supply}
                    </Statistic.Value>
                    <Statistic.Label>Supply</Statistic.Label>
                  </Statistic>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment attached secondary>
          <Message color="violet">{this.props.details.description}</Message>
        </Segment>
        <Segment attached="bottom">
          <Grid>
            <Grid.Column width={10}>
              {/* <MonthlyPriceChart />
              <TableCont historicals={this.props.historicals[0]} /> */}
              {/* <TableHeader historicals={this.props.historicals[0]} /> */}
            </Grid.Column>
            <Grid.Column width={6}>
              <NewsList
                filteredNews={this.props.news.filter(article => {
                  return article.mentions === this.props.crypto.ticker;
                })}
              />
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  crypto: state.cryptos.crypto,
  details: state.cryptos.details,
  historicals: state.cryptos.historicals,
  news: state.cryptos.news
});

export default connect(mapStateToProps)(CryptoDetails);
