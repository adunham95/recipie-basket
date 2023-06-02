'use client';
import React, { useState } from 'react';
import FieldSet from '../formElements/fieldSet';
import TextInput from '../inputs/text-input';
import TextArea from '../inputs/text-area';
import CoverImageUpload from '../inputs/cover-image-upload';
import { Button } from '../button/button';
import EmptyBlock from '../emptyBlock/emptyBlock';
import { IIngredient } from '@/types/ingredient';

interface INewRecipeProps {
  onSave?: () => void;
}

const NewRecipe = (props: INewRecipeProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  function addNewIngredient() {
    setIngredients([{ id: '1', title: '' }]);
  }

  return (
    <form>
      <div className="space-y-12">
        <FieldSet title="Details">
          <TextInput
            id="recipe-name"
            label="Recipe Name"
            className="col-span-full"
            value={title}
            onChange={setTitle}
          />

          <TextArea
            id="recipe-about"
            label="About Recipe"
            className="col-span-full"
            rows={3}
            value={description}
            onChange={setDescription}
          />

          <CoverImageUpload
            id="recipe-image"
            label="Recipe Image"
            className="col-span-full"
            helperText="Upload an image to use as the cover image"
            value={coverImage}
            onChange={setCoverImage}
          />
        </FieldSet>

        <FieldSet title="Ingredients" subTitle="Add your list of ingredients">
          <EmptyBlock
            title="No Ingredients"
            subTitle="Get started by adding some ingredients,"
            buttonText="Add Ingredient"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              viewBox="0 0 512 512"
              stroke="currentColor"
            >
              <path d="M495.82 288h5A110.13 110.13 0 0 0 512 240c0-33.16-14.77-62.69-37.75-83.21C459 103.33 410.38 64 352 64c-3.63 0-7.05.77-10.61 1.07C323.6 26.74 285 0 240 0s-83.6 26.74-101.39 65.07c-3.56-.3-7-1.07-10.61-1.07A128 128 0 0 0 0 192c0 38.58 17.43 72.66 44.52 96H16.18C7 288-.74 295.72.06 304.84 6.7 381.21 58.18 444.23 128 468.69V480a32.16 32.16 0 0 0 32.21 32h192.25c17.7 0 31.54-14.33 31.54-32v-11.51c69.49-24.62 121.32-87.49 127.94-163.65.8-9.12-6.94-16.84-16.12-16.84zM480 240a78.45 78.45 0 0 1-16.71 48H336.71A78.51 78.51 0 0 1 320 240a80 80 0 0 1 160 0zM32 192c0-35.13 23-104.78 128-96 27.87-63.73 65.28-64 80-64 14.18 0 52 0 80 64 35.07-2.93 76.19-1.1 106 35.35a110.79 110.79 0 0 0-26-3.35 112.12 112.12 0 0 0-112 112 110.27 110.27 0 0 0 11.09 48H256V104a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v161.37l-111-111a8 8 0 0 0-11.31 0l-11.35 11.29a8 8 0 0 0 0 11.31l111 111H128A96.11 96.11 0 0 1 32 192zm341.79 246.34L352 445.89V480H160v-34l-21.23-7.51C85.11 419.7 45.74 374.27 34.59 320h442.82c-11.12 54.07-50.27 99.43-103.62 118.34z" />
            </svg>
          </EmptyBlock>
        </FieldSet>

        <FieldSet title="Instructions" subTitle="Add your list of instructions">
          <EmptyBlock
            title="No Instructions"
            subTitle="Get started by adding some instructions,"
            buttonText="Add Instruction"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-12 w-12 text-gray-500 fill-gray-500"
              viewBox="0 0 512 512"
            >
              <path d="M416 32a95.17 95.17 0 0 0-57.73 19.74C334.93 20.5 298 0 256 0s-78.93 20.5-102.27 51.74A95.56 95.56 0 0 0 0 128c0 41.74 64 224 64 224v128a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32V352s64-182.26 64-224a96 96 0 0 0-96-96zm0 448H96v-96h320zm0-128h-44.09L384 201.25a8 8 0 0 0-7.33-8.61l-16-1.28h-.65a8 8 0 0 0-8 7.37L339.8 352h-68.46V200a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v152H172.2l-12.27-153.3a8 8 0 0 0-8-7.37h-.65l-16 1.28a8 8 0 0 0-7.33 8.61L140.09 352H96S32 150.7 32 128a64.07 64.07 0 0 1 64-64 63.22 63.22 0 0 1 38.39 13.24l25.68 19.48 19.3-25.83C197.83 46.18 225.77 32 256 32s58.17 14.18 76.63 38.89l19.3 25.83 25.68-19.48A63.22 63.22 0 0 1 416 64a64.07 64.07 0 0 1 64 64c0 22.7-64 224-64 224z" />
            </svg>
          </EmptyBlock>
        </FieldSet>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button type="submit" size="lg">
          Create New Recipe
        </Button>
      </div>
    </form>
  );
};

export default NewRecipe;
