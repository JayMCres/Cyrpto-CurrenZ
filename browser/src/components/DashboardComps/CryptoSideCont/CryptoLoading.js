import React from "react";
import { Message, Icon } from "semantic-ui-react";

const CryptoLoading = () => (
  <Message style={{ "border-style": "double", "border-color": "blue" }} icon>
    <Icon name="circle notched" loading />
    <Message.Content>
      <Message.Header style={{ color: "blue" }}>
        Please Click Crypto
      </Message.Header>
    </Message.Content>
  </Message>
);

export default CryptoLoading;
