/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("institution_profile", (table) => {
    table.increments();
    table.integer("institution_id").unique();
    table.foreign("institution_id").references("institution.id");
    table.string("name");
    table.string("url");
    table.string("bio");
    table.string("img_name").unique();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("institution_profile");
};
