import React from 'react';
import { twMerge } from 'tailwind-merge';
import InputWrapper, { IDefaultInputWrapperProps } from './inputWrapper';

interface ISelectInputProps extends IDefaultInputWrapperProps {
  value: string;
  onChange: (text: string, name: string, e: React.ChangeEvent) => void;
  inputClassName?: string;
  ariaDescription?: string;
  autoComplete?: string;
  options: { value: string; label: string }[];
}

const SelectInput = (props: ISelectInputProps) => {
  const {
    onChange,
    id,
    name,
    hasError = false,
    inputClassName = '',
    ariaDescription,
    value,
    autoComplete,
    options,
  } = props;
  return (
    <InputWrapper {...props}>
      <select
        name={id || name}
        id={id}
        value={value}
        aria-describedby={ariaDescription || name || id}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value, name || id, e)}
        className={twMerge(
          'mt-2 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6',
          hasError &&
            'ring-red-300 placeholder:text-red-300 focus:ring-red-500',
          inputClassName,
        )}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
};

export default SelectInput;
