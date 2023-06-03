import React from 'react';
import { twMerge } from 'tailwind-merge';
import LabelBar, { ILabelBarProps } from './labelBar';

export interface IDefaultInputWrapperProps extends ILabelBarProps {
  id: string;
  name?: string;
  helperText?: string;
  errorText?: string;
  hasError?: boolean;
  className?: string;
  inputWrapperClassName?: string;
}

interface IInputWrapperProps extends IDefaultInputWrapperProps {
  children: React.ReactNode;
}

const InputWrapper = (props: IInputWrapperProps) => {
  const {
    id,
    name,
    helperText,
    errorText,
    hasError = false,
    className = '',
    inputWrapperClassName = '',
    children,
    htmlFor,
  } = props;
  return (
    <div className={className}>
      <LabelBar htmlFor={htmlFor || id || name} {...props} />
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
