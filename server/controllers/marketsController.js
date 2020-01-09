const fetch = require("node-fetch");

exports.getCryptoMarkets = async (req, res) => {
  const url = `https://api.coinranking.com/v1/public/markets`;

  // let response = await fetch(URL);
  let response = await fetch(url);
  // console.log("response", response2);

  let json = await response.json();
  // console.log("JSON", json);

  let dataArray = await json.data.markets;
  // console.log("dataArray", dataArray);

  res.send(dataArray);
};
