const router = require("express").Router();
const db = require("../db");

router.get("/searchProduct/:query", (req, res) => {
  db.query(
    `SELECT * FROM products WHERE LOWER(product_name) LIKE '%${req.params.query
      .trim()
      .toLowerCase()}%'`,
    (err, res1) => {
      if (!err) res.send(res1.rows);
      else throw err;
    }
  );
});

router.get("/fetchProduct/:product_id", (req, res) => {
  console.log("re1");
  db.query(
    `SELECT * FROM products WHERE (product_id)::text='${req.params.product_id}'`,
    (err, res1) => {
      if (!err) res.send(res1.rows);
      else throw err;
    }
  );
});

router.get("/fetchLatest", (req, res) => {
  db.query(`SELECT * FROM products WHERE is_latest='${true}'`, (err, res1) => {
    if (!err) res.send(res1.rows);
    else throw err;
  });
});

router.get("/fetchHottest", (req, res) => {
  db.query(`SELECT * FROM products WHERE is_hot='${true}'`, (err, res1) => {
    if (!err) res.send(res1.rows);
    else throw err;
  });
});

router.get("/fetchAll", (req, res) => {
  db.query(`SELECT * FROM products`, (err, res1) => {
    if (!err) res.send(res1.rows);
    else throw err;
  });
});

router.post("/create", (req, res) => {
  const {
    product_name,
    product_price,
    product_image_url,
    product_specs,
    is_hot,
    is_latest,
  } = req.body;

  db.query(
    `INSERT INTO products(product_name,product_image_url,product_specs,product_price,is_hot,is_latest) 
    VALUES
    ('${product_name}',
    '${product_image_url}',
    '{${product_specs}}',
    '${product_price}',
    '${is_hot || false}',
    '${is_latest || false}')`,
    (err, res1) => {
      if (!err) res.send("success");
      else res.send(err);
    }
  );
});

module.exports = router;
