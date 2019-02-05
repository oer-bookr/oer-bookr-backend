const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "joseph", password: bcrypt.hashSync("pass", 12) },
        { username: "max", password: bcrypt.hashSync("pass", 12) },
        { username: "jeremiah", password: bcrypt.hashSync("pass", 12) },
        { username: "jacob", password: bcrypt.hashSync("pass", 12) },
        { username: "jordan", password: bcrypt.hashSync("pass", 12) },
        { username: "jonathan", password: bcrypt.hashSync("pass", 12) }
      ]);
    });
};
