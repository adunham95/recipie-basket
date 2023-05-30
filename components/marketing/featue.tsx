import Link from 'next/link';
import React from 'react';

interface IMarketingFeatureProps {
  tagline?: string;
  title: string;
  subTitle: string;
  features: {
    id: string;
    title: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
  }[];
}

export const MarketingFeature = (props: IMarketingFeatureProps) => {
  const { tagline, title, subTitle, features = [] } = props;
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        {tagline && (
          <h2 className="text-base font-semibold leading-7 text-primary">
            {tagline}
          </h2>
        )}
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">{subTitle}</p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feat) => (
            <div className="flex flex-col" key={feat.id}>
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <svg
                  className="h-5 w-5 flex-none text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clipRule="evenodd"
                  />
                </svg>
                {feat.title}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feat.description}</p>
                <p className="mt-6">
                  {feat.ctaLink && (
                    <Link
                      href={feat.ctaLink}
                      className="text-sm font-semibold leading-6 text-primary"
                    >
                      {feat.ctaText || 'Learn more'}{' '}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
