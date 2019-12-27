const express = require("express");
require("dotenv").config();
const key = process.env.CC_TWO_KEY;
const bodyParser = require("body-parser");
const app = express();
const fetch = require("node-fetch");
const morgan = require("morgan");
const cors = require("cors");
// const moment = require("moment");

const helmet = require("helmet");

app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const routes = require("./routes");

app.use("/", routes);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

const io = require("socket.io").listen(server);
const connections = [];

io.sockets.on("connection", socket => {
  if (connections.length === 0) {
    connections.push(socket);
    console.log(
      "made socket connection: %s sockets connected",
      socket.id,
      connections.length
    );
  }
  setInterval(() => getApiAndEmit(socket), 30000);
  socket.once("diconnect", () => {
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log("disconnected: %s sockets remaining", connections.length);
  });
});

const getApiAndEmit = async socket => {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD&api_key=${key}`;

  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("JSON", json);

  let data = await json.Data;
  // console.log("DATA", data);

  let combinedArray = await data.map(object => {
    let one = Object.values(object.CoinInfo);
    // console.log(one);
    let two = Object.values(object.DISPLAY.USD);
    // let key = object.DISPLAY.USD;
    // console.log("two", key);
    let combined = one.concat(two);
    // console.log("HI", combined);
    return combined;
  });

  // console.log("COMBO", combinedArray[0]);

  let coinPrice = await combinedArray.map((object, index) => {
    // console.log([object, index]);
    return {
      index: index,
      id: object[0],
      ticker: object[1],
      company: object[2],
      image: object[4],
      overview: object[5],
      market: object[16],
      price: object[17],
      LASTUPDATE: object[18],
      MEDIAN: object[19],
      LASTVOLUME: object[20],
      LASTVOLUMETO: object[21],
      LASTTRADEID: object[22],
      VOLUMEDAY: object[23],
      VOLUMEDAYTO: object[24],
      VOLUME24HOUR: object[25],
      VOLUME24HOURTO: object[26],
      OPENDAY: object[27],
      HIGHDAY: object[28],
      LOWDAY: object[29],
      OPEN24HOUR: object[30],
      HIGH24HOUR: object[31],
      LOW24HOUR: object[32],
      LASTMARKET: object[33],
      VOLUMEHOUR: object[34],
      VOLUMEHOURTO: object[35],
      OPENHOUR: object[36],
      HIGHHOUR: object[37],
      LOWHOUR: object[38],
      TOPTIERVOLUME24HOUR: object[39],
      TOPTIERVOLUME24HOURTO: object[40],
      CHANGE24HOUR: object[41],
      CHANGEPCT24HOUR: object[42],
      CHANGEDAY: object[43],
      CHANGEPCTDAY: object[44],
      CHANGEHOUR: object[45],
      CHANGEPCTHOUR: object[46],
      SUPPLY: object[47],
      MKTCAP: object[48],
      TOTALVOLUME24H: object[49],
      TOTALVOLUME24HTO: object[50],
      TOTALTOPTIERVOLUME24H: object[51],
      TOTALTOPTIERVOLUME24HTO: object[52],
      IMAGEURL: object[53]
    };
  });
  // console.log(coinPrice);
  socket.emit("FromAPI", coinPrice);
};
