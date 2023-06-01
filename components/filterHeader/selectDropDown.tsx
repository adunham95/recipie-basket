'use client';
import React, { useState } from 'react';

interface ISelectDropDownProps {
  title: string;
  checked: string[];
}

const SelectDropDown = (props: ISelectDropDownProps) => {
  const { title, checked = [] } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block px-4 text-left">
      <button
        type="button"
        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
        aria-expanded="false"
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        {checked.length > 0 && (
          <span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
            {checked.length}
          </span>
        )}
        <svg
          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* <!--
    'Category' dropdown, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
      <div
        className={`absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none ${
          open ? 'block' : 'hidden'
        }`}
      >
        <form className="space-y-4">
          <div className="flex items-center">
            <input
              id="filter-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-category-0"
              className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-category-1"
              name="category[]"
              value="tees"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-category-1"
              className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
            >
              Tees
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-category-2"
              name="category[]"
              value="objects"
              type="checkbox"
              checked
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-category-2"
              className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
            >
              Objects
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelectDropDown;
