/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('institution_profile').del()
  await knex('institution_profile').insert([
    {institution_id: 'rowValue1', name: '', url: '', bio: ''},
    {institution_id: 'rowValue2', name: '', url: '', bio: ''},
    {institution_id: 'rowValue3', name: '', url: '', bio: ''}
  ]);
};
