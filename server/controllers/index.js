const cryptosController = require("./cryptosController");
const cryptoController = require("./cryptoController");
const exchangeController = require("./exchangeController");
const historicalPriceController = require("./historicalPriceController");
const monthlyPriceController = require("./monthlyPriceController");
const weeklyPriceController = require("./weeklyPriceController");
const newsController = require("./newsController");

module.exports = {
  cryptosController,
  cryptoController,
  exchangeController,
  historicalPriceController,
  monthlyPriceController,
  weeklyPriceController,
  newsController
};
