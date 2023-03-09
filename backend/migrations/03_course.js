/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("course", (table) => {
    table.increments();
    table.integer("institution_id");
    table.foreign("institution_id").references("users.id");
    table.string("name");
    table.string("bio");
    table.string("url");
    table.string("img_name").unique();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("course");
};
