const fetch = require("node-fetch");
// const key = "fe278748eb49ae23227e6769d92ef40bde306a9f0c3d91513b3c09680189c717";
const key = "4ac5a3cde201f19ee79ef7575ff75d799c03a547b07e709c56b5cb068eb7c74e";
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
