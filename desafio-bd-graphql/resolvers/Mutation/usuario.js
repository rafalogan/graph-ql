import { db } from '../../config/db.js';
import { profileQueries } from '../Query/perfil.js';
import { userQueries } from '../Query/usuario.js';

const { profile: getProfile } = profileQueries;
const { user: getUser } = userQueries;

const newUser = async (_, { data }) => {
  try {
    const profilesIds = []

    if (data.profiles) {
      for (const filter of data.profiles) {
        const profile = await getProfile(_, { filter });
        if (profile) profilesIds.push(profile.id);
      }
    }

    Reflect.deleteProperty(data, 'profiles');

    const [id] = await db('users').insert({ ...data });
    for (const profile_id of profilesIds) {
      await db('users_profiles').insert({ user_id: id, profile_id });
    }

    return db('users').where({ id }).first();
  } catch (err) {
    console.error('ERROR:', err);
    return null;
  }
};


const updateUser = async (_, { filter, data }) => {
  try {
    const user = await getUser(_, { filter });

    if (user) {
      const { id } = user;
      if (data.profiles) {
        await db('users_profiles').where({ user_id: id }).delete();
        for (const filter of data.profiles) {
          const profile = await getProfile(_, { filter });
          if (profile) {
            await db('users_profiles').insert({ profile_id: profile.id, user_id: id });
          }
        }

        Reflect.deleteProperty(data, 'profiles');
        await db('users').where({ id }).update(data);
        return { ...user, ...data };
      }
      return null;
    }
  } catch (err) {
    console.error('ERROR:', err);
    return null;
  }
};

const deleteUser = async (_, { filter, data }) => {
  try {
    const user = await getUser(_, { filter });

    if (user) {
      const { id } = user;
      await db('users_profiles').where({ user_id: id }).delete();
      await db('user').where({ id }).delete();
    }
    return user;
  } catch (err) {
    console.error('ERROR:', err);
    return null;
  }
};

export const userMutations = {
  newUser,
  updateUser,
  deleteUser,
}
