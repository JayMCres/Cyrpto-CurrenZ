const cryptosController = require("./cryptosController");
const cryptoController = require("./cryptoController");
const exchangeController = require("./exchangeController");
const historicalPriceController = require("./historicalPriceController");
const chartPriceController = require("./chartPriceController");
const weeklyPriceController = require("./weeklyPriceController");
const newsController = require("./newsController");

module.exports = {
  cryptosController,
  cryptoController,
  exchangeController,
  historicalPriceController,
  chartPriceController,
  weeklyPriceController,
  newsController
};
