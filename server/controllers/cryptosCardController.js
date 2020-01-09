const fetch = require("node-fetch");
// const key = process.env.CC_TWO_KEY;
const key = process.env.CC_API_KEY;

exports.getCryptosCard = async (req, res) => {
  const url = `https://min-api.cryptocompare.com/data/cards/general?api_key=${key}`;

  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("JSON", json);

  let jsonArray = await [json.Data];

  let data = jsonArray.map(item => {
    return Object.values(item);
  });
  // console.log("DATA", data);

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
