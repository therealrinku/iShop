const express = require("express");

const app = express();

//routes import
const product = require("./routes/product");

//adding middleware
app.use("/product", product);

module.exports = app;
