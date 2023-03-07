/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cohort", (table) => {
    table.increments();
    table.integer("course_id");
    table.foreign("course_id").references("course.id");
    table.string("name");
    table.date("start_date");
    table.date("end_date");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cohort");
};
