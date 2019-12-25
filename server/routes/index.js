const routes = require("express").Router();

const cryptosController = require("../controllers/cryptosController");
const cryptoController = require("../controllers/cryptoController");
const exchangeController = require("../controllers/exchangeController");
const historicalPriceController = require("../controllers/historicalPriceController");
const chartPriceController = require("../controllers/chartPriceController");
const newsController = require("../controllers/newsController");
const weeklyPriceController = require("../controllers/weeklyPriceController");

routes.use("/api/cryptos", cryptosController.getAllCryptos);
routes.use("/api/crypto", cryptoController.getSingleCrypto);
routes.use("/api/exchanges", exchangeController.getExchanges);
routes.use(
  "/api/historicalprices",
  historicalPriceController.getHistoricalPrices
);
routes.use("/api/weeklyprices", weeklyPriceController.getWeeklyPrices);
routes.use("/api/chartprices", chartPriceController.getChartPrices);
routes.use("/api/news", newsController.getNewsArticles);

module.exports = routes;
