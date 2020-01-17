const fetch = require("node-fetch");
const key = process.env.CC_API_KEY;
const moment = require("moment");

exports.getNewsFeed = async (req, res) => {
  const url = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`;

  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("JSON", json);

  let data = await json.Data;

  res.send(data);
  // console.log(newsArray);
};
