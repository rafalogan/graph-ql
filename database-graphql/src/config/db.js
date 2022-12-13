import knex from 'knex';
import knexfile from '../../knexfile.js';

export const databaseConfig = knex(knexfile);
