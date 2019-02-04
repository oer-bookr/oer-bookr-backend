exports.up = function(knex, Promise) {
  return knex.schema.createTable("reviews", tbl => {
    tbl.increments();

    tbl
      .integer("books_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("books");

    tbl.string("reviewer").notNullable();
    tbl.string("review").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("books");
};
