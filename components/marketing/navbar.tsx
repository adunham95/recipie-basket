import React from 'react';
import Logo, { LogoWide } from '../logo';
import { GLOBALS } from '@/lib/gobals';
import { AccountButton } from '../authButtons';

export const MarketingNavbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">{GLOBALS.companyName}</span>
            <Logo className="sm:hidden h-8 w-auto fill-primary" />
            <LogoWide className="hidden sm:block h-8 w-auto fill-primary" />
          </a>
        </div>

        <div className="flex flex-1 justify-end items-center">
          <AccountButton
            primaryClassName="ml-2 flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            secondaryClassName="text-sm font-semibold leading-6 text-gray-900"
          />
        </div>
      </nav>
    </header>
  );
};
