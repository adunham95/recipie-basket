import { useMutation } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';
import { IAuthUser } from '@/types/next-auth';
interface IUpdateUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  userID: string;
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

  const data = await client.request<{ updateUser: IAuthUser }>(
    query,
    variables,
  );
  return data;
}
