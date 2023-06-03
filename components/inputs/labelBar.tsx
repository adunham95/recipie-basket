import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ILabelBarProps {
  label?: string;
  htmlFor?: string;
  labelClassName?: string;
  labelContainerClassName?: string;
  labelHintSlot?: React.ReactNode;
}

const LabelBar = (props: ILabelBarProps) => {
  const {
    htmlFor,
    label,
    labelClassName = '',
    labelHintSlot,
    labelContainerClassName,
  } = props;
  return (
    <div
      className={twMerge(
        'flex justify-between items-center',
        labelContainerClassName,
      )}
    >
      {label ? (
        <label
          htmlFor={htmlFor}
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
  );
};

export default LabelBar;
