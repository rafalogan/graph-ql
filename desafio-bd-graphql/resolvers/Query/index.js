import { userQueries } from './usuario.js';
import { profileQueries } from './perfil.js';

export const Query = {
  ...userQueries,
  ...profileQueries,
}
