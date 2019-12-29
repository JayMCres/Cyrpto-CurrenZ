const fetch = require("node-fetch");

exports.getGlobalData = async (req, res) => {
  const url = `https://api.coingecko.com/api/v3/global`;

  // let response = await fetch(URL);
  let response = await fetch(url);
  // console.log("response", response2);

  let json = await response.json();
  // console.log("JSON", json);

  let totalVolume = await [json.data.total_volume];
  // .total_volume;

  let marketCap = await [json.data.total_market_cap];

  let globalDataArray = await totalVolume.concat(marketCap);

  // console.log("JSON", reformatedData);
  res.send(globalDataArray);
};
