const express = require("express");
const knex = require("knex");
const knexConfig = require("../knexfile.js");

const router = express.Router();

const db = knex(knexConfig.development);

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

router.get("/reviews/:id", (req, res) => {
  const { id } = req.params;

  db.select()
    .from("reviews")
    .where({ id })
    .then(reviews => {
      const review = reviews[0];
      res.status(200).json(review);
    });
});

router.post("/reviews", (req, res) => {
  const changes = req.body;

  if (!changes.reviewer || !changes.review || !changes.rating) {
    res.status(422).json({ error: "Please fill in all categories!" });
  } else {
    db.insert(changes)
      .into("reviews")
      .then(review => {
        res.status(201).json(review);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the review to the database."
        });
      });
  }
});

router.delete("/reviews/:id", (req, res) => {
  const { id } = req.params;
  db("reviews")
    .where({ id: id })
    .del()
    .then(count => {
      if (count) {
        res.status(200).json(count);
      } else {
        res.status(404).json({ error: "Review not found!" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The review could not be removed." });
    });
});

router.put("/reviews/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  db("reviews")
    .where({ id: id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The reviews information could not be modified." });
    });
});

module.exports = router;
