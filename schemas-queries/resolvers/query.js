import { users, profiles } from "../database/data.js";

const ola = () => "Hello World!";

const horaCerta = () => new Date();

const userLoged = () => ({
  id: 1,
  name: "Kamila Alencar",
  email: "ka@teste.com",
  age: 30,
  real_salary: 62324.64,
  vip: true,
});

const destakProduct = () => ({
  name: "Macbook Pro",
  price: 7920.9,
  discount: 10,
});

const megaSenaNumbers = () => {
  const orderASC = (a, b) => a - b;

  return Array(6)
    .fill(0)
    .map(() => parseInt(Math.random() * 60 + 1))
    .sort(orderASC);
};

const allUsers = () => users;
const user = (_, { id }) => users.find((u) => u.id === id);

const allProfiles = () => profiles;
const profile = (_, { id }) => profiles.find(p => p.id === id);

export const Query = {
  ola,
  horaCerta,
  userLoged,
  destakProduct,
  megaSenaNumbers,
  user,
  users: allUsers,
  profile,
  profiles: allProfiles,
};
