const express = require("express");

const reviewsRouter = require("../reviews/reviewsRouter.js");
const booksRouter = require("../books/booksRouter.js");

const router = express.Router();

router.use("/", reviewsRouter);
router.use("/", booksRouter);

module.exports = router;
