import Image from 'next/image';
import React from 'react';

interface IRecipeCardSmallProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  category: string;
  tags?: string[];
}

const RecipeCardSmall = (props: IRecipeCardSmallProps) => {
  const { imgSrc, imgAlt, title, category, tags } = props;
  return (
    <div className="group relative">
      <div className="relative aspect-square w-full bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="object-cover overflow-hidden rounded"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-base text-gray-700">
            <a href="#">{title}</a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCardSmall;
