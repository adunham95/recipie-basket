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
    <div className="flex overflow-x-auto remove-scroll mt-2">
      {options.map((opt) => {
        const itemChecked = checked.includes(opt.id);
        return (
          <label
            key={opt.id}
            className={twMerge(
              'flex items-center justify-center rounded-md py-2 px-2 text-xs font-semibold uppercase sm:flex-1 cursor-pointer focus:outline-none mr-1 mb-1',
              itemChecked ? checkedStyle : unCheckedStyle,
            )}
          >
            <input
              type="checkbox"
              name="memory-option"
              value="4 GB"
              className="sr-only"
              aria-labelledby="memory-option-0-label"
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
