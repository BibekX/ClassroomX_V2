/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user_profile", (table) => {
    table.increments();
    table.integer("user_id").unique();
    table.foreign("user_id").references("users.id");
    table.string("fname");
    table.string("lname");
    table.string("bio");
    table.string("img_name").unique();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user_profile");
};
