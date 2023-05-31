import { GLOBALS } from '@/lib/gobals';
import { GraphQLClient } from 'graphql-request';

const url = GLOBALS.graphqlAPI;

export const getClient = () => {
  const client = new GraphQLClient(url);
  return client;
};
