const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

//routes import
const product = require("./routes/product");
const auth = require("./routes/auth");

//adding middleware
app.use("/product", product);
app.use("/auth", auth);

module.exports = app;
