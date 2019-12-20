const express = require("express");
require("dotenv").config();
const key = process.env.CC_API_KEY;
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
  setInterval(() => getApiAndEmit(socket), 20000);
  socket.once("diconnect", () => {
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log("disconnected: %s sockets remaining", connections.length);
  });
});

const getApiAndEmit = async socket => {
  // const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${key}`;
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?tsym=USD&api_key=${key}`;

  // let response = await fetch(url);
  let response = () => {
    return new Promise(function(resolve, reject) {
      fetch(url).then(response => {
        resolve(response);
      });
    });
  };
  let responseData = await response();
  // console.log(responseData);

  let jsonResponse = await responseData.json();
  // console.log(jsonResponse);
  let priceData = await jsonResponse.Data;
  // console.log(priceData);

  let combinedArray = await priceData.map(object => {
    // console.log("object", object.DISPLAY.USD);
    let one = Object.values(object.CoinInfo);

    let two = Object.values(object.DISPLAY.USD);
    // console.log("object", two);
    let combined = one.concat(two);

    return combined;
  });

  // console.log(" combinedArray", combinedArray);

  let coinPrice = await combinedArray.map((object, index) => {
    return {
      index: index,
      id: object[0],
      ticker: object[1],
      company: object[2],
      image: object[4],
      overview: object[5],
      market: object[16],
      price: object[17],
      CHANGE24HOUR: object[40],
      CHANGEPCT24HOUR: object[41],
      CHANGEDAY: object[42],
      CHANGEPCTDAY: object[43],
      supply: object[44],
      mkcap: object[45]
    };
  });
  // console.log(coinPrice);
  socket.emit("FromAPI", coinPrice);
};
