'use client';
import React, { useState } from 'react';
import SelectDropDown from './selectDropDown';
import SearchInput from '../inputs/search-input';
import SelectList from './selectList';

interface IFilterHeaderProps {
  option?: string;
}

const selectOptions = [
  {
    id: 'category',
    title: 'Category',
    options: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Sushi', 'Seafood'],
  },
  {
    id: 'ingredients',
    title: 'Ingredients',
    options: ['Shrimp', 'Eel'],
  },
];

const FilterHeader = (props: IFilterHeaderProps) => {
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<{
    [key: string]: string[];
  }>({});

  function handleSelect(val: string[], name: string) {
    console.log({ name, val });
    setSelectedFilter({
      ...selectedFilter,
      [name]: val,
    });
  }

  function removeItemFromFilter(val: string, key: string) {
    setSelectedFilter({
      ...selectedFilter,
      [key]: selectedFilter[key].filter((v) => v !== val),
    });
  }

  const filterValues = Object.values(selectedFilter).flat();
  console.log({ filterValues, selectedFilter });

  return (
    <div className="bg-white mb-3">
      <div
        className={` ${
          showMobileFilter ? 'block' : 'hidden'
        } relative z-40 sm:hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>

        <div className="fixed inset-0 z-40 flex">
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setShowMobileFilter(!showMobileFilter)}
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Filters --> */}
            <form className="mt-4">
              {selectOptions.map((opt) => (
                <SelectList
                  key={opt.id}
                  title={opt.title}
                  options={opt.options}
                  checked={selectedFilter[opt.id]}
                  onSelect={(o) => handleSelect(o, opt.id)}
                />
              ))}
            </form>
          </div>
        </div>
      </div>

      {/* <!-- Filters --> */}
      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>

        <div className="border-b border-gray-200 bg-white py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <SearchInput className="mr-1" />
            {/* <!-- Mobile filter dialog toggle, controls the 'mobileFiltersOpen' state. --> */}
            <button
              type="button"
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
            >
              Filters
            </button>

            <div className="hidden sm:block">
              <div className="flow-root">
                <div className="-mx-4 flex items-center divide-x divide-gray-200">
                  {selectOptions.map((opt) => (
                    <SelectDropDown
                      key={opt.id}
                      title={opt.title}
                      options={opt.options}
                      checked={selectedFilter[opt.id]}
                      onSelect={(o) => handleSelect(o, opt.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Active filters --> */}
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
            <h3 className="text-sm font-medium text-gray-500">
              Filters
              <span className="sr-only">, active</span>
            </h3>

            <div
              aria-hidden="true"
              className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"
            ></div>

            <div className="mt-2 sm:ml-4 sm:mt-0">
              {/* <div className="-m-1 flex flex-wrap items-center"> */}
              <div className="w-full overflow-x-auto remove-scroll  flex flex-nowrap relative">
                {Object.entries(selectedFilter).map(([key, data]) => {
                  return data.map((filterItem) => (
                    <span
                      key={filterItem}
                      className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
                    >
                      <span>{filterItem}</span>
                      <button
                        type="button"
                        className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                        onClick={() => removeItemFromFilter(filterItem, key)}
                      >
                        <span
                          className="sr-only
                    "
                        >
                          Remove {filterItem} from filter
                        </span>
                        <svg
                          className="h-2 w-2"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 8 8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="M1 1l6 6m0-6L1 7"
                          />
                        </svg>
                      </button>
                    </span>
                  ));
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterHeader;
