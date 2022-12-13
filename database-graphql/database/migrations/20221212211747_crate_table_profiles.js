/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.string('label').notNullable();
  }).then(() => knex('profiles').insert([
    { name: 'common', label: 'Common' },
    { name: 'admin', label: 'Administrator' },
    { name: 'master', label: 'Master' },
  ]))
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('profiles');
};
