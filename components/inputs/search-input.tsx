import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ISearchInput {
  className?: string;
  placeholderText?: string;
}

const SearchInput = (props: ISearchInput) => {
  const { className, placeholderText = 'Search' } = props;
  return (
    <div className={twMerge('w-full', className)}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative text-gray-400 focus-within:text-gray-600 border-solid rounded-md">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          id="search"
          className="block w-full rounded-md border-0 bg-white py-3 pl-10 pr-5 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary sm:text-sm sm:leading-6"
          placeholder={placeholderText}
          type="search"
          name="search"
        />
      </div>
    </div>
  );
};

export default SearchInput;
