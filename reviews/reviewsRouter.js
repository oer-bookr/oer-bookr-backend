const express = require("express");
const knex = require("knex");
const knexConfig = require("../knexfile.js");

const router = express.Router();

const db = knex(knexConfig.development);

router.get("/reviews", (req, res) => {
  res.status(200).json("working!");
  console.log("working");
});

module.exports = router;
