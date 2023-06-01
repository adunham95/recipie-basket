import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ICategorySelectorProps {
  options: { id: string; title: string }[];
  checked: string[];
}

const checkedStyle = 'bg-primary text-white hover:bg-primary-light';
const unCheckedStyle =
  'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-primary-extra-light';

const CategorySelector = (props: ICategorySelectorProps) => {
  const { options, checked } = props;
  return (
    <div className="w-full overflow-x-auto remove-scroll mt-2 flex flex-nowrap relative">
      {options.map((opt) => {
        const itemChecked = checked.includes(opt.id);
        return (
          <label
            key={opt.id}
            className={twMerge(
              'items-center justify-center rounded-md py-2 px-2 text-sm md:text-xs md:font-semibold uppercase sm:flex-1 cursor-pointer focus:outline-none mr-1 mb-1 inline-flex',
              itemChecked ? checkedStyle : unCheckedStyle,
            )}
          >
            <input
              type="checkbox"
              value={opt.title}
              className="sr-only"
              checked={itemChecked}
            />
            <span id="memory-option-0-label">{opt.title}</span>
          </label>
        );
      })}
    </div>
  );
};

export default CategorySelector;
