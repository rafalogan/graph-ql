// Update with your config settings.

import { log } from "console";
import { execDotEnv } from "./src/utils/utils.js";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

execDotEnv()

const file = {
  client: 'mysql2',
  connection: {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.DATAUSER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './database/migrations'
  }
};

log('knex file', file);

export default {
  ...file
}
