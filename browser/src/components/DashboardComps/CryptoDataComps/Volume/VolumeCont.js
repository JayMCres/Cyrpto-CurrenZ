import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import Volumes from "./Volumes";

class VolumeCont extends Component {
  render() {
    // console.log("Market Cap Cont Props", this.props);
    return (
      <Segment
        style={{
          "background-color": "black",
          "border-style": "double",
          "border-color": "blue"
        }}
      >
        {/* <Header as="h4" style={{ color: "#6666ff" }} floated="right" dividing>
        Crypto Exchanges
      </Header> */}
        <Volumes
          volumeData={this.props.volumeData.map(item => {
            const volume = item[1] / 1000000000;
            return {
              ticker: item[0].toUpperCase(),
              data: volume.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })
            };
          })}
        />
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  volumeData: state.global.volumeData[0]
});

export default connect(mapStateToProps)(VolumeCont);
