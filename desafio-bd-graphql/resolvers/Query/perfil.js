import { db } from '../../config/db.js';

const profiles = () => db('profiles');

const profile = (_, { filter }) => {
  if (!filter) return null;
  const { id, name } = filter;

  if (id) return db('profiles').where({ id }).first();
  if (name) return db('profiles').where({ name }).first();

  return null;
};

export const profileQueries = {
  profiles,
  profile
}
