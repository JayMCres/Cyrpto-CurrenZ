import React from "react";
import { Breadcrumb, Divider, List, Message } from "semantic-ui-react";

const CryptoDataHeader = props => {
  // console.log("DashboardData", props);
  return (
    //prettier-ignore
    <Breadcrumb>
      <Breadcrumb.Section link style={{ color: "white", "font-size": "10px" }}>
        Market Cap
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="ellipsis vertical" style={{color: "white" }}/>
      <Breadcrumb.Section active>
        <a href="#">
          {(props.market_cap / 1000000).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </a>
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="circle" />
      <Breadcrumb.Section link style={{ color: "white", "font-size": "10px" }}>
       Volume
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="ellipsis vertical" style={{color: "white" }}/>
      <Breadcrumb.Section active>
        <a href="#">
        {props.total_volume.toLocaleString()}
        </a>
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="circle" />
      <Breadcrumb.Section link style={{ color: "white", "font-size": "10px" }}>
       Supply
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="ellipsis vertical" style={{color: "white" }}/>
      <Breadcrumb.Section active>
        <a href="#">
        {props.circulating_supply.toLocaleString()}
        </a>
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="circle" />
      <Breadcrumb.Divider icon="circle" />
      {/* <Breadcrumb.Divider icon="circle" />
      <Breadcrumb.Divider icon="circle" /> */}
      <Breadcrumb.Section link style={{ color: "white", "font-size": "20px" }}>
       Price
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="ellipsis vertical" style={{color: "white" }}/>
      <Breadcrumb.Section active style={{"font-size": "25px"}}>
        <a href="#">
        {props.current_price.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
        </a>
      </Breadcrumb.Section>
      <Breadcrumb.Divider  style={{color: "white","font-size": "30px"}} >||</Breadcrumb.Divider>
      <Breadcrumb.Section active style={{"font-size": "20px", "font-style": "italic"}}>
        <a href="#">
        ({props.price_change_percentage_24h.toFixed(2)}%)
        </a>
      </Breadcrumb.Section>
     
    </Breadcrumb>
  );
};

export default CryptoDataHeader;
