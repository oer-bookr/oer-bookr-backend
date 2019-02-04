exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("reviews")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("reviews").insert([
        {
          book_id: 1,
          reviewer: "reviewer test",
          review: "Test review",
          rating: 3
        }
      ]);
    });
};
