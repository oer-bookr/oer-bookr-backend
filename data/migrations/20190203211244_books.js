exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", tbl => {
    tbl.increments();

    tbl.string("title", 255).notNullable();

    tbl.string("author", 255).notNullable();

    tbl.string("publisher", 255).notNullable();

    tbl.string("license", 255).notNullable();

    tbl.string("subject", 255).notNullable();

    tbl.string("image", 500).notNullable();

    tbl.string("link", 500);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("books");
};
