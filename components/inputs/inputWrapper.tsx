import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IInputWrapperProps {
  id: string;
  name?: string;
  label?: string;
  helperText?: string;
  errorText?: string;
  hasError?: boolean;
  className?: string;
  labelClassName?: string;
  inputWrapperClassName?: string;
  children: React.ReactNode;
}

const InputWrapper = (props: IInputWrapperProps) => {
  const {
    id,
    name,
    label,
    helperText,
    errorText,
    hasError = false,
    className = '',
    labelClassName = '',
    inputWrapperClassName = '',
    children,
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
      <div className={twMerge('mt-2', inputWrapperClassName)}>{children}</div>
      {helperText && !hasError && (
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

export default InputWrapper;
