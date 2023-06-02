import { useMutation } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';
import { IAuthUser } from '@/types/next-auth';

export const useCreateUser = () => {
  return useMutation(createUser);
};

interface ICreateUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

async function createUser(input: ICreateUser) {
  const client = getClient();
  const operationName = 'createUser';
  const variables = {
    ...input,
  };

  const query = gql`
    mutation ${operationName}($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
      ${operationName}(
        email: $email
        firstName: $firstName
        lastName: $lastName
        password: $password
      ) {
        email
        firstName
        image
        primaryColor
        secondaryColor
        lastName
        id
        name
        image
      }
    }
  `;

  const data = await client.request<{ createUser: IAuthUser }>(
    query,
    variables,
  );
  return data;
}
