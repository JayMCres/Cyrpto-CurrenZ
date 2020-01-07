const fetch = require("node-fetch");

exports.getExchangeFeed = async (req, res) => {
  const url = `https://api.coinranking.com/v1/public/exchanges`;

  // let response = await fetch(URL);
  let response = await fetch(url);
  // console.log("response", response2);

  let json = await response.json();
  // console.log("JSON", json);

  let feedData = await json.data.exchanges;
  res.send(feedData);
};
