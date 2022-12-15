
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex, Promise) {
  return knex.schema.createTable('profiles', table => {
    table.increments('id').primary()
    table.string('name').notNull().unique()
    table.string('label').notNull()
  }).then(function() {
    return knex('profiles').insert([
      { name: 'comum', label: 'Comum' },
      { name: 'admin', label: 'Administrador' },
      { name: 'master', label: 'Master' },
    ])
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex, Promise) {
  return knex.schema.dropTable('profiles')
};
