const fetch = require("node-fetch");
const key = process.env.CC_TWO_KEY;
const moment = require("moment");

exports.getNewsFeed = async (req, res) => {
  const url = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`;

  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("JSON", json);

  let data = await json.Data;

  // .map(item => {
  //   return item;
  // });
  console.log("DATA", data);

  // let newsArray = await data.map(object => {
  //   let date = moment(object.published_on * 1000).format("MMM DD YYYY");
  //   let tickers = object.categories.split("|");
  //   // const key = Object.keys(object.RAW.USD);
  //   return {
  //     id: object.id,
  //     date: date,
  //     mentions: tickers[0],
  //     img: object.imageurl,
  //     title: object.title,
  //     url: object.url,
  //     body: object.body,
  //     source: object.source
  //   };
  // });

  res.send(data);
  // console.log(newsArray);
};
