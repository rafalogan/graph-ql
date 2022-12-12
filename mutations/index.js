import { ApolloServer } from "apollo-server";
import { importSchema } from 'graphql-import';
import { error, log } from "console";
import * as resolvers from './resolvers/index.js';

const schemaPath = './schema/index.graphql';

const sever = new ApolloServer({ typeDefs: importSchema(schemaPath), resolvers });

sever
  .listen()
  .then(({ url }) => log("Running server at:", url))
  .catch((err) => error("SERVER:ERROR:", err));
