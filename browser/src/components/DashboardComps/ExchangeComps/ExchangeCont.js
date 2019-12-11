import React, { Component } from "react";
import { Segment, Header, Message } from "semantic-ui-react";
// import { connect } from "react-redux";

// import { fetchExchanges } from "../../../actions/cryptos";

import Exchange from "./Exchange";

export default class ExchangeCont extends Component {
  render() {
    console.log("Exchanges Props", this.props);

    return (
      <Segment>
        <Header as="h3" textAlign="center" dividing>
          CryptoCurrency Indexes
        </Header>

        <Segment>
          <Exchange />
          {/* {this.props.exchanges.map((item, index) => {
            return <Exchange key={index} {...item} />;
          })} */}
        </Segment>
      </Segment>
    );
  }
}

// const mapStateToProps = state => ({
//   exchanges: state.exchanges
// });

// export default connect(mapStateToProps)(ExchangeCont);
