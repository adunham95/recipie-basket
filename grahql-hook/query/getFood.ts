import { useQuery } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';
import { IFood } from '@/types/ingredient';

export const useAllFood = () => {
  return useQuery(['all-food'], allFood);
};

async function allFood() {
  const client = getClient();

  const query = gql`
    query allFood {
      allFood {
        name
        image
        id
      }
    }
  `;

  const data = await client.request<{
    allFood: IFood[];
  }>(query);
  return data;
}
