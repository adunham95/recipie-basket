import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ILabelBarProps {
  label?: string;
  htmlFor?: string;
  labelClassName?: string;
  labelHintSlot?: React.ReactNode;
}

const LabelBar = (props: ILabelBarProps) => {
  const { htmlFor, label, labelClassName = '', labelHintSlot } = props;
  return (
    <div className="flex justify-between">
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
