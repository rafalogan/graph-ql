import { db } from '../../config/db.js';

const users = () => db('users');

const user = async (_, { filter }) => {
  if (!filter) return null;
  const { id, email } = filter;

  if (id) return db('users').where({ id }).first();
  if (email) return db('users').where({ email }).first();

  return null;
};

export const userQueries = {
  users,
  user
}
