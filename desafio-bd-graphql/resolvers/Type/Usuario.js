import { db } from '../../config/db.js';

const profiles = async (user) => db('profiles')
  .join('users_profiles', 'profiles.id', 'users_profiles.profile_id')
  .where({ user_id: user.id });

export const User = {
  profiles
}
