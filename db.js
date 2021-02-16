const pg = require("pg");
const db_url = require("./db_config");

const db = new pg.Client(db_url);

db.connect()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
