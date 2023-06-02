import { useMutation } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';
import { IIngredient } from '@/types/ingredient';

interface ICreateIngredient {
  name: string;
  image?: string;
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
        image
      }
    }
  `;

  const data = await client.request<{
    createIngredient: IIngredient[];
  }>(query, variables);
  return data;
}
