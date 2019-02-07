const express = require("express");
const knex = require("knex");
const knexConfig = require("../knexfile.js");

const router = express.Router();

const db = knex(knexConfig.development);

const { authenticate } = require("../auth/authenticate.js");

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
            subject: book.subject,
            image: book.image,
            link: book.link,
            reviews: reviews.map(review => {
              return {
                id: review.id,
                reviewer: review.reviewer,
                review: review.review,
                rating: review.rating
              };
            })
          });
        })
        .catch(err => {
          res
            .status(500)
            .json({ err: "The book and review could not be retrieved." });
        });
    });
});

router.post("/books", (req, res) => {
  const changes = req.body;

  if (
    !changes.title ||
    !changes.author ||
    !changes.publisher ||
    !changes.license ||
    !changes.subject ||
    !changes.image
  ) {
    res.status(422).json({ error: "Please fill in all categories!" });
  } else {
    db.insert(changes)
      .into("books")
      .then(book => {
        res.status(201).json(book);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the book to the database."
        });
      });
  }
});

router.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  db("books")
    .where({ id: id })
    .del()
    .then(count => {
      if (count) {
        res.status(200).json({ count, id });
      } else {
        res.status(404).json({ error: "Book not found!" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The book could not be removed." });
    });
});

router.put("/books/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  db("books")
    .where({ id: id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The books information could not be modified." });
    });
});

module.exports = router;
