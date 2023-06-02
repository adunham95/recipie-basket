import { useMutation } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';

interface ICreateIngredient {
  name: string;
}

interface ICreateIngredientResponse {
  name: string;
}

export const useCreateIngredient = () => {
  return useMutation(createIngredient);
};

async function createIngredient(input: ICreateIngredient) {
  const client = getClient();
  const variables = {
    ...input,
  };

  const query = gql`
    mutation createIngredient($name: String = "") {
      createIngredient(name: $name) {
        id
        name
      }
    }
  `;

  const data = await client.request<{
    createIngredient: ICreateIngredientResponse;
  }>(query, variables);
  return data;
}
