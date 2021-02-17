const router = require("express").Router();
const bcrypt = require("bcrypt");
const db = require("../db");

router.post("/login", (req, res) => {
  db.query(
    `SELECT email,password,login_token,is_admin FROM users WHERE email='${req.body.email}'`,
    (err, res1) => {
      if (res1.rows.length > 0) {
        const { email, login_token, password, is_admin } = res1.rows[0];
        bcrypt.compare(req.body.password, password, (err, result) => {
          if (result) res.send({ email, login_token, is_admin });
          else res.send("invalid password");
        });
      } else {
        res.send("invalid username");
      }
    }
  );
});

//signup user
router.post("/signup", (req, res) => {
  db.query(
    `SELECT email FROM users WHERE email='${req.body.email}'`,
    (err, res1) => {
      if (res1.rows.length <= 0) {
        bcrypt.hash(req.body.password, 10, (err1, hash) => {
          if (!err) {
            db.query(
              `INSERT INTO users(email,password,account_created_on,is_admin)
              VALUES('${req.body.email}','${hash}','${new Date()}','${true}')
            `,
              (err2, res2) => {
                if (!err2) res.send("success");
                else throw err2;
              }
            );
          } else {
            throw err1;
          }
        });
      } else {
        res.send("Account already exists on that email.");
      }
    }
  );
});

module.exports = router;
