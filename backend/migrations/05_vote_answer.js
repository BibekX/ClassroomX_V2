/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("vote_answer", (table) => {
    table.increments();
    table.integer("answer_id");
    table.foreign("answer_id").references("answer.id");
    table.integer("user_id");
    table.foreign("user_id").references("users.id");
    table.string("vote");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("vote_answer");
};
