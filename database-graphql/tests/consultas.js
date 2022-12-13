import { error, log } from "console";
import { databaseConfig } from "../src/config/db.js";

databaseConfig('profiles')
  .then(res => log('profiles', res))
  .catch(err => error('ERROR:', err.sqlMessage))
  .finally(() => databaseConfig.destroy());
