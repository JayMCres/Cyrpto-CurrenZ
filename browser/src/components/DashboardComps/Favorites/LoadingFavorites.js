import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

const LoadingFavorites = () => (
  <Dimmer active>
    <Loader size="mini" content={"Preparing Favorites..."} />
  </Dimmer>
);

export default LoadingFavorites;
