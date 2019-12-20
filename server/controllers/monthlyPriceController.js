const fetch = require("node-fetch");
const key = process.env.CC_API_KEY;
const moment = require("moment");

exports.getMonthlyPrices = async (req, res) => {
  console.log("BODY", req.body.ticker);

  const url = `https://min-api.cryptocompare.com/data/histoday?fsym=${req.body.ticker}&tsym=USD&limit=100&aggregate=1&pi_key=${key}`;

  let response = await fetch(url);
  // // console.log("response", response);

  let json = await response.json();
  // console.log("JSON", json);

  let cryptoPrices = await json.Data;
  // // console.log("Crypto Prices", cryptoPrices);

  let historicalArray = await cryptoPrices.filter((obj, index) => {
    return index > cryptoPrices.length - 31;
  });
  // // console.log("historical", historicalArray);

  let reformated = await historicalArray.map((object, index) => {
    let date = moment(object.time * 1000).format("MMM DD YYYY");
    let close = object.close.toLocaleString("us-EN", {
      style: "currency",
      currency: "USD"
    });
    let o = object.open.toLocaleString("us-EN", {
      style: "currency",
      currency: "USD"
    });
    let h = object.high.toLocaleString("us-EN", {
      style: "currency",
      currency: "USD"
    });
    let l = object.low.toLocaleString("us-EN", {
      style: "currency",
      currency: "USD"
    });
    return { label: date, value: object.close };
  });

  let newArray = await reformated;

  // console.log("Price Data", newArray);
  // res.send(json);
  res.send(newArray);
};
