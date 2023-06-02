import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ITextAreaProps {
  id: string;
  name?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  hasError?: boolean;
  value: string;
  onChange: (text: string, name: string, e: React.ChangeEvent) => void;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  ariaDescription?: string;
  autoComplete?: string;
  rows?: number;
}

const TextArea = (props: ITextAreaProps) => {
  const {
    onChange,
    id,
    name,
    placeholder = '',
    label,
    helperText,
    errorText,
    hasError = false,
    className = '',
    labelClassName = '',
    inputClassName = '',
    ariaDescription,
    value,
    autoComplete,
    rows = 3,
  } = props;
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id || name}
          className={twMerge(
            'block text-sm font-medium leading-6 text-gray-900',
            labelClassName,
          )}
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <textarea
          name={id || name}
          id={id}
          rows={rows}
          value={value}
          autoComplete={autoComplete}
          className={twMerge(
            'block w-full rounded-md border-0 py-1.5 px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6',
            hasError &&
              'ring-red-300 placeholder:text-red-300 focus:ring-red-500',
            inputClassName,
          )}
          placeholder={placeholder}
          aria-describedby={ariaDescription || name || id}
          onChange={(e) => onChange(e.target.value, name || id, e)}
        />
      </div>
      {helperText && hasError && (
        <p
          className="mt-2 text-sm text-gray-500"
          id={`${name || id}-description`}
        >
          {helperText}
        </p>
      )}
      {hasError && (
        <p className="mt-2 text-sm text-red-600" id={`${name || id}-error`}>
          {errorText || 'Error'}
        </p>
      )}
    </div>
  );
};

export default TextArea;
