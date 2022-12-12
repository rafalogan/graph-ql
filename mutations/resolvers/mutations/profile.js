import { nextId, profiles } from "../../database/data.js";

const findProfileIndex = (filter) => {
  if (!filter) return -1;
  const { id, name } = filter;

  if (id) return profiles.findIndex(p => p.id === id);
  if (name) return profiles.findIndex(p => p.name === name);

  return -1;
}

const newProfile = (_, { data }) => {
  const existisProfile = profiles.some(p => p.name === data.name);

  if (existisProfile) throw new Error('profile already exists!');

  const profile = {
    id: nextId(),
    ...data
  }

  profiles.push(profile);
  return profile;
};


const updateProfile = (_, { filter, data }) => {
  const i = findProfileIndex(filter);

  if (i < 0) return null;
  const profile = {
    ...profiles[i],
    ...data,
  }

  profiles[i] = profile;
  return profile;
};

const deleteProfile = (_, { filter }) => {
  const i = findProfileIndex(filter);

  if (i < 0) return null;
  const exclude = profiles.splice(i, 1);

  return exclude ? exclude[0] : null;

}

export const Profile = {
  newProfile,
  updateProfile,
  deleteProfile
};
