/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user_cohort", (table) => {
    table.increments();
    table.integer("cohort_id");
    table.foreign("cohort_id").references("cohort.id");
    table.integer("user_id");
    table.foreign("user_id").references("users.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user_cohort");
};
