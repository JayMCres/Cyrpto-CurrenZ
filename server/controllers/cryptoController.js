const fetch = require("node-fetch");
const key = process.env.API_KEY_COIN;

exports.getSingleCrypto = async (req, res) => {
  // console.log("body", req.body);
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=${key}&symbol=${req.body.ticker}`;

  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("Json", json);

  let data = await json.data;
  // console.log("Data", data);

  let dataObject = Object.values(data);
  // console.log("Data Object", dataObject);

  let cryptoDetails = await dataObject[0];
  // console.log("cryptoDetails", cryptoDetails);
  res.send(cryptoDetails);
};
