import { error, log } from "console";
import { databaseConfig } from "../src/config/db.js";

const newProfileSU = {
  name: 'root' + Math.random(),
  label: 'Super User',
}


databaseConfig('profiles').insert(newProfileSU)
  .then(res => log('insert response', res))
  .catch(err => error('ERROR:', err.sqlMessage))
  .finally(() => databaseConfig.destroy());
