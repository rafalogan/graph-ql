import { Profile } from "./profile.js";
import { User } from "./user.js";

export const Mutation = {
  ...User,
  ...Profile
};
