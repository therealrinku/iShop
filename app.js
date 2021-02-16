const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

//routes import
const product = require("./routes/product");

//adding middleware
app.use("/product", product);

module.exports = app;
