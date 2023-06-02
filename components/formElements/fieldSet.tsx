import React from 'react';

interface IFieldSetProps {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}

const FieldSet = (props: IFieldSetProps) => {
  const { title, subTitle, children } = props;
  return (
    <fieldset className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          {title}
        </h2>
        {subTitle && (
          <p className="mt-1 text-sm leading-6 text-gray-600">{subTitle}</p>
        )}
      </div>

      <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
        {children}
      </div>
    </fieldset>
  );
};

export default FieldSet;
