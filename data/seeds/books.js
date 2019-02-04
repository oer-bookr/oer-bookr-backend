exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("books")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        {
          Title: "Test Title",
          Author: "Test Author",
          Publisher: "Test Publisher",
          License: "Test License"
        }
      ]);
    });
};
