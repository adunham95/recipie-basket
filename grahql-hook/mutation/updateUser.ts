import { useMutation } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';
interface IUpdateUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  userID: string;
}

interface IUpdateUserResponse {
  email: string;
  firstName: string;
  lastName: string;
  name: string;
}

export const useUpdateUser = () => {
  return useMutation(updateUser);
};

async function updateUser(input: IUpdateUser) {
  const client = getClient();
  const operationName = 'updateUser';
  const variables = {
    ...input,
  };

  const query = gql`
    mutation ${operationName}($userID: String!, $firstName: String, $lastName: String, $email: String, $password: String) {
      ${operationName} (userID: $userID 
        email: $email
        firstName: $firstName
        lastName: $lastName
        password: $password) {
        email
        firstName
        lastName
        name
      }
    }
  `;

  const data = await client.request<{ updateUser: IUpdateUserResponse }>(
    query,
    variables,
  );
  return data;
}
