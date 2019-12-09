const express = require("express");
const key = "fe278748eb49ae23227e6769d92ef40bde306a9f0c3d91513b3c09680189c717";
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
  socket.once("diconnect", () => {
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log("disconnected: %s sockets remaining", connections.length);
  });
  connections.push(socket);
  console.log(
    "made socket connection: %s sockets connected",
    socket.id,
    connections.length
  );
  setInterval(() => getApiAndEmit(socket), 30000);
});

const getApiAndEmit = async socket => {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD&api_key=${key}`;

  let response = await fetch(url);

  let json = await response.json();

  let data = await json.Data;

  let combinedArray = await data.map(object => {
    let one = Object.values(object.CoinInfo);

    let two = Object.values(object.DISPLAY.USD);

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
  socket.emit("FromAPI", coinPrice);
};
