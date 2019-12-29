const fetch = require("node-fetch");

exports.getExchanges = async (req, res) => {
  const url = `https://api.coingecko.com/api/v3/exchanges`;

  // let response = await fetch(URL);
  let response = await fetch(url);
  // console.log("response", response2);

  let json = await response.json();
  // console.log("JSON", json);

  res.send(json);
};
