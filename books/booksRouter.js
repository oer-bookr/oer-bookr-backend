const express = require("express");
const knex = require("knex");
const knexConfig = require("../knexfile.js");

const router = express.Router();

const db = knex(knexConfig.development);

const { authenticate } = require("../auth/authenticate");

router.get("/", (req, res) => {
  res.status(200).json("working!");
  console.log("working");
});

router.get("/books", (req, res) => {
  db("books")
    .then(book => {
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).json({ error: "Books not found" });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "The books information could not be retrieved." })
    );
});

router.get("/books/:id", (req, res) => {
  const { id } = req.params;
  db.select()
    .from("books")
    .where({ id })
    .then(books => {
      db.select()
        .from("reviews")
        .where("book_id", id)
        .then(reviews => {
          const book = books[0];
          res.status(200).json({
            id: book.id,
            title: book.title,
            author: book.author,
            publisher: book.publisher,
            license: book.license,
            reviews: reviews.map(review => {
              return {
                id: review.id,
                reviewer: review.reviewer,
                review: review.review,
                rating: review.rating
              };
            })
          });
        });
    });
});

module.exports = router;
