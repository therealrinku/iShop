const router = require("express").Router();
const db = require("../db");

router.get("/getCart/:user_email", (req, res) => {
  db.query(
    `SELECT cart_items FROM users WHERE email='${req.params.user_email}'`,
    (err, res1) => {
      res.send(res1.rows);
    }
  );
});

router.post("/updateCart/:user_email", (req, res) => {
  console.log(JSON.stringify(req.body.cart_items));
  db.query(
    `UPDATE users SET cart_items='${[
      JSON.stringify(req.body.cart_items),
    ]}' WHERE email='${req.params.user_email}'`,
    (err, res1) => {
      if (!err) res.send("success");
      else throw err;
    }
  );
});

module.exports = router;
