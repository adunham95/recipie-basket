import React from 'react';
import { Button } from '../button/button';

interface IEmptyBlockProps {
  title: string;
  subTitle?: string;
  buttonText?: React.ReactNode;
  buttonClick?: () => void;
  children?: React.ReactNode;
}

const EmptyBlock = (props: IEmptyBlockProps) => {
  const { title, subTitle, buttonText, children, buttonClick } = props;
  return (
    <div className="text-center col-span-full">
      <div className="text-gray-500 fill-gray-500 mx-auto h-12 w-12 ">
        {children}
      </div>
      <h3 className="mt-2 text-sm font-semibold text-gray-900">{title}</h3>
      {subTitle && <p className="mt-1 text-sm text-gray-500">{subTitle}</p>}
      <div className="mt-6">
        {buttonText && (
          <Button className="inline-flex items-center" onClick={buttonClick}>
            <svg
              className="-ml-0.5 mr-1.5 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyBlock;
