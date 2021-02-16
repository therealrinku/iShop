const express = require("express");
const http = require("http");
const cors = require("cors");
const app = require("./app");

const server = http.createServer(app);

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT PORT ${PORT}`);
});
