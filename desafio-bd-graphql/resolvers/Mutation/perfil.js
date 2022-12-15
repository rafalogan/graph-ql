import { db } from '../../config/db.js';
import { profileQueries } from '../Query/perfil.js';

const { profile: getProfile } = profileQueries;

const newProfile = async (_, { data }) => {
  try {
    const [id] = await db('profiles').insert({ ...data });

    return db('profiles').where({ id }).first();

  } catch (err) {
    console.error('ERROR:', err);

    return null;
  }
};

const updateProfile = async (_, { filter, data }) => {
  try {
    const profile = await getProfile(_, { filter });

    if (profile) {
      const { id } = profile;
      await db('profiles').update(data).where({ id });
    }

    return { ...profile, ...data }
  } catch (err) {
    console.error('ERROR:', err);

    return null;
  }
};

const deleteProfile = async (_, { filter }) => {
  try {
    const profile = await getProfile(_, { filter });

    if (profile) {
      const { id } = profile;

      await db('users_profiles').where({ profile_id: id }).delete();
      await db('profiles').where({ id }).delete()
      return profile;
    }

    return null;
  } catch (err) {
    console.error('ERROR:', err);

    return null;
  }
};

export const profileMutations = {
  newProfile,
  updateProfile,
  deleteProfile,
}
