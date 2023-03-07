/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("question", (table) => {
    table.increments();
    table.integer("user_id");
    table.foreign("user_id").references("users.id");
    table.string("title");
    table.string("detail");
    table.string("tag");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("question");
};
