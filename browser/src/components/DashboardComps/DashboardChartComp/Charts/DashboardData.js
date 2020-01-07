import React from "react";
import { Breadcrumb, Divider, List } from "semantic-ui-react";

const DashboardData = props => {
  // console.log("DashboardData", props);
  return (
    <List bulleted horizontal verticalAlign="middle" floated="right">
      <List.Item>
        <b
          style={{
            color: "white",
            "font-size": "10px"
          }}
        >
          Market Cap|
          <a
            style={{
              "font-size": "15px"
            }}
          >
            {(props.market_cap / 1000000).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </a>{" "}
        </b>
      </List.Item>
      <List.Item>
        <b
          style={{
            color: "white",
            "font-size": "10px"
          }}
        >
          Volume|
          <a
            style={{
              "font-size": "15px"
            }}
          >
            {props.total_volume.toLocaleString()}
          </a>{" "}
        </b>
      </List.Item>
      <List.Item>
        <b
          style={{
            color: "white",
            "font-size": "10px"
          }}
        >
          Price|
          <a
            style={{
              "font-size": "15px"
            }}
          >
            {props.current_price.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </a>{" "}
        </b>
      </List.Item>

      <List.Item>
        <b
          style={{
            color: "white",
            "font-size": "10px"
          }}
        >
          Change 24hrs|
          <a
            style={{
              "font-size": "15px"
            }}
          >
            {props.price_change_percentage_24h.toFixed(2)}%
          </a>{" "}
        </b>
      </List.Item>
      <List.Item>
        <b
          style={{
            color: "white",
            "font-size": "10px"
          }}
        >
          Supply |{" "}
          <a
            style={{
              "font-size": "15px"
            }}
          >
            {props.circulating_supply.toLocaleString()}
          </a>
        </b>
      </List.Item>
    </List>
  );
};

export default DashboardData;
