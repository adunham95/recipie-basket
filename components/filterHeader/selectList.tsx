'use client';
import React, { useState } from 'react';

interface ISelectListProps {
  title: string;
}

const SelectList = (props: ISelectListProps) => {
  const { title } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-t border-gray-200 px-4 py-6">
      <h3 className="-mx-2 -my-3 flow-root">
        {/* <!-- Expand/collapse section button --> */}
        <button
          type="button"
          className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400"
          aria-controls="filter-section-0"
          aria-expanded="false"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="font-medium text-gray-900">{title}</span>
          <span className="ml-6 flex items-center">
            <svg
              className={`${
                expanded ? '-rotate-180' : 'rotate-0'
              } h-5 w-5 transform`}
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
          </span>
        </button>
      </h3>
      {/* <!-- Filter section, show/hide based on section state. --> */}
      <div
        className={`${expanded ? 'block' : 'hidden'} pt-6`}
        id="filter-section-0"
      >
        <div className="space-y-6">
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-1"
              name="category[]"
              value="tees"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-1"
              className="ml-3 text-sm text-gray-500"
            >
              Tees
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-2"
              name="category[]"
              value="objects"
              type="checkbox"
              checked
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-2"
              className="ml-3 text-sm text-gray-500"
            >
              Objects
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-1"
              name="category[]"
              value="tees"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-1"
              className="ml-3 text-sm text-gray-500"
            >
              Tees
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-2"
              name="category[]"
              value="objects"
              type="checkbox"
              checked
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-2"
              className="ml-3 text-sm text-gray-500"
            >
              Objects
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-1"
              name="category[]"
              value="tees"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-1"
              className="ml-3 text-sm text-gray-500"
            >
              Tees
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-2"
              name="category[]"
              value="objects"
              type="checkbox"
              checked
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-2"
              className="ml-3 text-sm text-gray-500"
            >
              Objects
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-1"
              name="category[]"
              value="tees"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-1"
              className="ml-3 text-sm text-gray-500"
            >
              Tees
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-2"
              name="category[]"
              value="objects"
              type="checkbox"
              checked
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-2"
              className="ml-3 text-sm text-gray-500"
            >
              Objects
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-1"
              name="category[]"
              value="tees"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-1"
              className="ml-3 text-sm text-gray-500"
            >
              Tees
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-2"
              name="category[]"
              value="objects"
              type="checkbox"
              checked
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-2"
              className="ml-3 text-sm text-gray-500"
            >
              Objects
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-1"
              name="category[]"
              value="tees"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-1"
              className="ml-3 text-sm text-gray-500"
            >
              Tees
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-2"
              name="category[]"
              value="objects"
              type="checkbox"
              checked
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-2"
              className="ml-3 text-sm text-gray-500"
            >
              Objects
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-1"
              name="category[]"
              value="tees"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-1"
              className="ml-3 text-sm text-gray-500"
            >
              Tees
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-2"
              name="category[]"
              value="objects"
              type="checkbox"
              checked
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-2"
              className="ml-3 text-sm text-gray-500"
            >
              Objects
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-1"
              name="category[]"
              value="tees"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-1"
              className="ml-3 text-sm text-gray-500"
            >
              Tees
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-2"
              name="category[]"
              value="objects"
              type="checkbox"
              checked
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-2"
              className="ml-3 text-sm text-gray-500"
            >
              Objects
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-1"
              name="category[]"
              value="tees"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-1"
              className="ml-3 text-sm text-gray-500"
            >
              Tees
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-2"
              name="category[]"
              value="objects"
              type="checkbox"
              checked
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-2"
              className="ml-3 text-sm text-gray-500"
            >
              Objects
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-category-0"
              name="category[]"
              value="new-arrivals"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-category-0"
              className="ml-3 text-sm text-gray-500"
            >
              All New Arrivals
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectList;
