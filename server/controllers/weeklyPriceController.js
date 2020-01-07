const fetch = require("node-fetch");
// const key = process.env.CC_TWO_KEY;
const key = process.env.CC_API_KEY;
const moment = require("moment");

exports.getWeeklyPrices = async (req, res) => {
  // console.log("BODY", req.body);

  const url = `https://min-api.cryptocompare.com/data/histoday?fsym=${req.body.foundCrypto.ticker}&tsym=USD&limit=100&aggregate=1&pi_key=${key}`;

  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("JSON", json);

  let cryptoPrices = await json.Data;
  // console.log("Crypto Prices", cryptoPrices);
  let reverseArray = await cryptoPrices.reverse();
  // console.log("Crypto Prices", historicalArray);

  let historicalArray = await reverseArray.filter((obj, index) => {
    return index < 5;
  });
  // console.log("historical", historicalArray);

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
    return {
      id: req.body.foundCrypto.id,
      ticker: req.body.foundCrypto.ticker,
      company: req.body.foundCrypto.company,
      image: req.body.foundCrypto.image,
      time: object.time,
      d: date,
      open: o,
      high: h,
      low: l,
      p: close,
      x: index,
      y: object.close
    };
  });

  let newArray = await reformated;

  // // console.log("Price Data", newArray);
  // // res.send(json);
  res.send(newArray);
};
