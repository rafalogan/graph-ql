
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('users_profiles', table => {
    table.integer('user_id').unsigned().references('id').inTable('users');
    table.integer('profile_id').unsigned().references('id').inTable('profiles');
    table.primary(['user_id', 'profile_id'])
  }).then(function() {
    return knex('users_profiles').insert([
      { user_id: 1, profile_id: 2 },
      { user_id: 1, profile_id: 3 },
      { user_id: 2, profile_id: 2 },
      { user_id: 3, profile_id: 1 },
    ])
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('users_profiles')
};
