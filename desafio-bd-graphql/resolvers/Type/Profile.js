import { db } from '../../config/db.js';

const users = async (profile) => db('users')
  .join('users_profiles', 'users.id', 'users_profiles.user_id')
  .where({ profile_id: profile.id });

export const Profile = {
  users
}
