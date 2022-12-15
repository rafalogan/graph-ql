// Update with your config settings.

export default {
  client: 'mysql2',
  connection: {
    database: 'desafio_cap_04',
    user: 'root',
    password: 'root@3306'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
