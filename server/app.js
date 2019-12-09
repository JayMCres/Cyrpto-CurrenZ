const express = require("express");

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

const port = process.env.PORT || 5000;
// const server =
app.listen(port, () => console.log(`Listening on port ${port}`));
