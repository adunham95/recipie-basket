import React, { FormEvent, useEffect, useState } from 'react';
import TextInput from '../inputs/text-input';
import { Button } from '../button/button';
import { useCreateFood } from '@/grahql-hook/mutation/createFood';
import { useQueryClient } from '@tanstack/react-query';
import { useAllFood } from '@/grahql-hook/query/getFood';
import { useToast } from '@/stores/toast';

interface INewFoodProps {
  onSave?: () => void;
}

const NewFood = (props: INewFoodProps) => {
  const queryClient = useQueryClient();
  const { onSave = () => null } = props;
  const [name, setFoodName] = useState('');
  const { refetch: refetchFood } = useAllFood();
  const { addToast } = useToast();
  const { mutate, isLoading } = useCreateFood({
    onSuccess: () => {
      console.log('isSuccess');
      addToast(`${name} food Added`, 'success');
      queryClient.invalidateQueries(['all-food']);
      refetchFood();
      setFoodName('');
      onSave();
    },
  });

  function saveFood(e: FormEvent) {
    e.preventDefault();
    mutate({
      name,
    });
  }

  return (
    <form onSubmit={saveFood}>
      <TextInput
        label="Food Name"
        id="food-name"
        value={name}
        onChange={setFoodName}
      />
      <div className="mt-2">
        <Button disabled={isLoading} type="submit" size="lg" className="w-full">
          Save Food
        </Button>
      </div>
    </form>
  );
};

export default NewFood;
