import { useMutation } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';
import { IFood } from '@/types/ingredient';

interface ICreateFood {
  name: string;
  image?: string;
}

export const useCreateFood = () => {
  return useMutation(createFood);
};

async function createFood(input: ICreateFood) {
  const client = getClient();
  const variables = {
    ...input,
  };

  const query = gql`
    mutation createFood($name: String = "") {
      createFood(name: $name) {
        id
        name
        image
      }
    }
  `;

  const data = await client.request<{
    createFood: IFood[];
  }>(query, variables);
  return data;
}
