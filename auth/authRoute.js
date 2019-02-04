const knex = require("knex");
const axios = require("axios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

const { authenticate } = require("./authenticate.js");

module.exports = server => {
  server.post("/register", register);
  server.post("/login", login);
};

function generateToken(user) {
  const payload = {
    username: user.username,
    password: user.password
  };

  const secret = process.env.JWT_SECRET;

  const options = {
    expiresIn: "60m"
  };

  return jwt.sign(payload, secret, options);
}

function register(req, res) {
  const userInfo = req.body;

  const hash = bcrypt.hashSync(userInfo.password, 12);

  userInfo.password = hash;

  db("users")
    .insert(userInfo)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error registering user to the database." });
    });
}

function login(req, res) {
  const creds = req.body;

  db("users")
    .where({ username: creds.username })
    .first()
    .then(user => {
      //   console.log(user);
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${user.username}`, token });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error logging in." });
    });
}
