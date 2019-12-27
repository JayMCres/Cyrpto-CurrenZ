const fetch = require("node-fetch");

const key = process.env.CC_TWO_KEY;

exports.getExchanges = async (req, res) => {
  // const URL = `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=BTC&tsym=USD&api_key=${key}`;
  const url = `https://api.coingecko.com/api/v3/exchanges`;

  // let response = await fetch(URL);
  let response = await fetch(url);
  // console.log("response", response2);

  let json = await response.json();
  console.log("JSON", json);

  // let data = await [json.Data.Exchanges];

  // const exchangeData = await data.map((exchange, index) => {
  //   return {
  //     One: exchange[0],
  //     Two: exchange[1],
  //     Three: exchange[2],
  //     Four: exchange[3]
  //   };
  // });
  // // console.log("exchangeData", exchangeData);

  res.send(json);
};
