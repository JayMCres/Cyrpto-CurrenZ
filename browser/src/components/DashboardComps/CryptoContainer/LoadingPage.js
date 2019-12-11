import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

const LoadingPage = () => (
  <Dimmer active>
    <Loader size="huge" content={"Preparing Cryptos..."} />
  </Dimmer>
);

export default LoadingPage;
