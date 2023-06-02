import { useQuery } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';

interface IAllIngredientsResponse {
  name: string;
  image?: string;
}

export const useAllIngredients = () => {
  return useQuery(['all-ingredients'], allIngredients);
};

async function allIngredients() {
  const client = getClient();

  const query = gql`
    query allIngredients {
      allIngredient {
        name
        image
        id
      }
    }
  `;

  const data = await client.request<{
    allIngredients: IAllIngredientsResponse;
  }>(query);
  return data;
}
