import { error, log } from 'console';
import { databaseConfig } from '../src/config/db.js';

const newUser = {
  name: 'Pietra Pandora',
  email: 'p.pandora@test.com',
  password: '12345678'
};


// update... db('...').wehre({...}).update({...})

const exec = async () => {
  const { qtde } = await databaseConfig('users').count('* as qtde').first();

  if (qtde === 0) await databaseConfig('users').insert(newUser);

  const { id } = await databaseConfig('users').where({ name: newUser.name }).first();

  await databaseConfig('users').where({ id }).update({
    name: 'Petra Pandora Silva',
    email: 'ppetra@test.com'
  });

  return databaseConfig('users').where({ id });
};

exec()
  .then(user => log('user', user))
  .catch(err => error('ERROR', err))
  .finally(() => databaseConfig.destroy())
