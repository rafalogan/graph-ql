import { userMutations } from './usuario.js';
import { profileMutations } from './perfil.js';

export const Mutation = {
  ...userMutations,
  ...profileMutations,
}
