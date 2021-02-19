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
  //
});

module.exports = router;
