/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("answer", (table) => {
    table.increments();
    table.integer("question_id");
    table.foreign("question_id").references("question.id");
    table.integer("user_id");
    table.foreign("user_id").references("users.id");
    table.string("comment");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("answer");
};
