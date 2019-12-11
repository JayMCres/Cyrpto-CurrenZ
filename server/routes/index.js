const routes = require("express").Router();

const cryptosController = require("../controllers/cryptosController");
const cryptoController = require("../controllers/cryptoController");
const exchangeController = require("../controllers/exchangeController");
const historicalPriceController = require("../controllers/historicalPriceController");
const monthlyPriceController = require("../controllers/monthlyPriceController");

routes.use("/api/cryptos", cryptosController.getAllCryptos);
routes.use("/api/crypto", cryptoController.getSingleCrypto);
routes.use("/api/exchanges", exchangeController.getExchanges);
routes.use(
  "/api/historicalprices",
  historicalPriceController.getHistoricalPrices
);
routes.use("/api/monthlyprices", monthlyPriceController.getMonthlyPrices);

module.exports = routes;
