exports.up = function(knex, Promise) {
  return knex.schema.createTable("reviews", tbl => {
    tbl.increments();

    tbl
      .integer("book_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("books");

    tbl.string("reviewer").notNullable();
    tbl.string("review").notNullable();
    tbl.integer("rating").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("reviews");
};
