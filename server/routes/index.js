const routes = require("express").Router();

const cryptosController = require("../controllers/cryptosController");

routes.use("/api/cryptos", cryptosController.getAllCryptos);

module.exports = routes;
