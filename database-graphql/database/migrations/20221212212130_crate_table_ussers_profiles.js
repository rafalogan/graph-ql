/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('users_profiles', table => {
    table.integer('user_id').unsigned().references('id').inTable('users');
    table.integer('profile_id').unsigned().references('id').inTable('profiles');
    table.primary(['user_id', 'profile_id']);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('users_profiles');
};
