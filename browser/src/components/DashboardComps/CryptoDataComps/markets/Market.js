import React from "react";
import { Card, Item, Image } from "semantic-ui-react";

const Markets = props => {
  // console.log("Exchange Props", props);
  return (
    <Card
      style={{
        "background-color": "#6600ff",
        "text-align": "center"
      }}
    >
      <Item.Group divided>
        <Item>
          <Image
            src={props.sourceIconUrl}
            // avatar
            inline
            circular
            spaced="right"
            size="mini"
            verticalAlign="middle"
          />
          <Item.Content>
            <Item.Meta style={{ color: "#f79d20" }}>
              {props.volume.toFixed()}
            </Item.Meta>
            {/* <Item.Meta style={{ color: "#f79d20" }}>
              Market Share: {props.marketShare.toFixed(2)}
            </Item.Meta> */}

            <Item.Meta>
              <span className="cinema">
                <strong style={{ color: "white" }}>{props.sourceName}</strong>
              </span>
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    </Card>
  );
};
export default Markets;
