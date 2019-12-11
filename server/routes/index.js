const routes = require("express").Router();

const cryptosController = require("../controllers/cryptosController");
const cryptoController = require("../controllers/cryptoController");
const exchangeController = require("../controllers/exchangeController");

routes.use("/api/cryptos", cryptosController.getAllCryptos);
routes.use("/api/crypto", cryptoController.getSingleCrypto);
routes.use("/api/exchanges", exchangeController.getExchanges);

module.exports = routes;
