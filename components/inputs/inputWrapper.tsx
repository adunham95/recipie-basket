import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface IDefaultInputWrapperProps {
  id: string;
  name?: string;
  label?: string;
  helperText?: string;
  errorText?: string;
  hasError?: boolean;
  className?: string;
  labelClassName?: string;
  inputWrapperClassName?: string;
  labelHintSlot?: React.ReactNode;
}

interface IInputWrapperProps extends IDefaultInputWrapperProps {
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
    labelHintSlot,
  } = props;
  return (
    <div className={className}>
      <div className="flex justify-between">
        {label ? (
          <label
            htmlFor={id || name}
            className={twMerge(
              'block text-sm font-medium leading-6 text-gray-900',
              labelClassName,
            )}
          >
            {label}
          </label>
        ) : (
          <span></span>
        )}
        {labelHintSlot}
      </div>
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
