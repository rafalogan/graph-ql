import { nextId, users } from "../../database/data.js";

const indexById = (filter) => {
  if (!filter) return -1;
  const { id, email } = filter;

  if (id) return users.findIndex(u => u.id === id);
  if (email) return users.findIndex(u => u.email === email);

  return -i;
};

const newUser = (_, { data }) => {
  const existisEmail = users.some(u => u.email === data.email);

  if (existisEmail) throw new Error('E-mail Já existe!');

  const user = {
    id: nextId(),
    ...data,
    profile_id: 2,
    status: 'ACTIVE'
  }

  users.push(user);
  return user;
};

const deleteUser = (_, { filter }) => {
  const i = indexById(filter);
  if (i < 0) return null;
  const exclude = users.splice(i, 1);

  return exclude ? exclude[0] : null;
}

const updateUser = (_, { filter, data }) => {
  const i = indexById(filter);

  if (i < 0) return null;

  const user = {
    ...users[i],
    ...data
  }

  users[i] = user;
  return user || null;

};

export const User = {
  newUser,
  deleteUser,
  updateUser
}; 
