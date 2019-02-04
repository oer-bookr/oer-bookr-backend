const express = require("express");
const knex = require("knex");
const knexConfig = require("../knexfile.js");

const router = express.Router();

const db = knex(knexConfig.development);

// router.get("/reviews", (req, res) => {
//   res.status(200).json("working!");
//   console.log("working");
// });

router.get("/reviews", (req, res) => {
  db("reviews")
    .then(review => {
      if (review) {
        res.status(200).json(review);
      } else {
        res.status(404).json({ error: "Reviews not found" });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "The reviews information could not be retrieved." })
    );
});

module.exports = router;
