const fetch = require("node-fetch");
// const key = "127351a0-17a9-4113-86af-8dab97d44e02";

const key = process.env.CC_API_KEY;

exports.getExchanges = async (req, res) => {
  const URL = `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=BTC&tsym=USD&api_key=${key}`;

  let response = await fetch(URL);
  // console.log("response", response);

  let json = await response.json();
  // console.log("JSON", json);

  let data = await [json.Data.Exchanges];

  const exchangeData = await data.map((exchange, index) => {
    return {
      One: exchange[0],
      Two: exchange[1],
      Three: exchange[2],
      Four: exchange[3]
    };
  });
  // console.log("exchangeData", exchangeData);

  res.send(exchangeData);
};
