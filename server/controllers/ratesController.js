const fetch = require("node-fetch");

exports.getRates = async (req, res) => {
  const url = `https://api.coingecko.com/api/v3/exchange_rates`;

  // let response = await fetch(URL);
  let response = await fetch(url);
  // console.log("response", response2);

  let json = await response.json();
  // console.log("JSON", json);

  let ratesArray = await Object.values(json.rates);

  // console.log("JSON", typeof ratesArray);
  res.send(ratesArray);
};
