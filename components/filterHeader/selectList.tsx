'use client';
import React, { useState } from 'react';

interface ISelectListProps {
  title: string;
  options: string[];
  checked: string[];
  onSelect: (selected: string[]) => void;
}

const SelectList = (props: ISelectListProps) => {
  const { title, options, checked = [], onSelect } = props;
  const [expanded, setExpanded] = useState(false);
  console.log({ checked });

  function handleChange(name: string, isSelected: boolean) {
    if (isSelected) {
      onSelect([...checked, name]);
    } else {
      onSelect([...checked].filter((c) => c !== name));
    }
  }

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
          {options.map((opt) => (
            <div key={opt} className="flex items-center">
              <input
                id={`list-${opt}`}
                name="category[]"
                value="new-arrivals"
                type="checkbox"
                onChange={(e) => handleChange(opt, e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary-light"
              />
              <label
                htmlFor={`list-${opt}`}
                className="ml-3 text-sm text-gray-500"
              >
                {opt}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectList;
