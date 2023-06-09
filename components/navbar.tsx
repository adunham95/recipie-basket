'use client';
import React, { useEffect, useState } from 'react';
import Logo, { LogoWide } from './logo';
import { NavLink } from './navLink';
import { useSession } from 'next-auth/react';
import { LoginButton, LogoutButton, ProfileButton } from './authButtons';
import { Avatar } from './avatar';
import { twMerge } from 'tailwind-merge';
import { APP_URL } from '@/lib/appUrls';

interface ILinkType {
  path: string;
  label: string;
}

const links: ILinkType[] = [
  {
    path: APP_URL.RECIPES,
    label: 'Recipes',
  },
  {
    path: APP_URL.NEW_RECIPE,
    label: 'New Recipe',
  },
];

const profileLinks: ILinkType[] = [];

interface INavProps {
  Slot1?: React.ReactNode;
}

const NavProfile = ({
  img,
  name = '',
  email = '',
  showImage = false,
  containerClassName = '',
  primaryColor,
  secondaryColor,
}: {
  img?: string | null | undefined;
  name?: string;
  email?: string;
  showImage?: boolean;
  containerClassName?: string;
  primaryColor?: string;
  secondaryColor?: string;
}) => {
  return (
    <div className={twMerge(`flex items-center px-4`, containerClassName)}>
      <div className="flex-shrink-0">
        {img && showImage && (
          <img className="h-10 w-10 rounded-full" src={img} alt="" />
        )}
        {!img && showImage && (
          <Avatar primaryColor={primaryColor} secondaryColor={secondaryColor} />
        )}
      </div>
      <div className={`${showImage && 'ml-3'}`}>
        <div className="text-base font-medium text-gray-800">{name}</div>
        <div className="text-sm font-medium text-gray-500">{email}</div>
      </div>
    </div>
  );
};

export const Nav = (props: INavProps) => {
  const { Slot1 } = props;
  const { data: session, status } = useSession();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [profileExpanded, setProfileExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    switch (status) {
      case 'authenticated':
        setIsLoggedIn(true);
        break;

      default:
        setIsLoggedIn(false);
        break;
    }
  }, [status]);

  return (
    <>
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Logo className="sm:hidden h-8 w-auto fill-primary" />
                <LogoWide className="hidden sm:block h-8 w-auto fill-primary" />
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                {links.map((link) => (
                  <NavLink
                    key={`desktop-${link.path}`}
                    href={link.path}
                    activeClassName="border-primary text-gray-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
            {isLoggedIn ? (
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* <!-- Profile dropdown --> */}
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() => setProfileExpanded(!profileExpanded)}
                    >
                      <span className="sr-only">Open user menu</span>
                      {session?.user?.image ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={session?.user?.image || ''}
                          alt=""
                        />
                      ) : (
                        <Avatar
                          primaryColor={session?.user.primaryColor}
                          secondaryColor={session?.user.secondaryColor}
                        />
                      )}
                    </button>
                  </div>
                  <div
                    className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                      profileExpanded ? '' : 'hidden'
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <NavProfile
                      containerClassName="px-4 py-2"
                      email={session?.user?.email || ''}
                      name={session?.user?.name || ''}
                      primaryColor={session?.user.primaryColor}
                      secondaryColor={session?.user.secondaryColor}
                    />
                    <LogoutButton className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-primary-light hover:bg-opacity-40" />
                    <ProfileButton className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-primary-light hover:bg-opacity-40" />
                    {profileLinks.map((link) => (
                      <NavLink
                        key={`desktop-${link.path}`}
                        href={link.path}
                        activeClassName="block px-4 py-2 text-sm text-gray-700 bg-primary-light text-dark"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-light hover:bg-opacity-40"
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="sm:-my-px sm:ml-6 sm:flex sm:space-x-8 hidden">
                <LoginButton className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Log in <span aria-hidden="true">&rarr;</span>
                </LoginButton>
              </div>
            )}
            <div className="-mr-2 flex items-center sm:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-controls="mobile-menu"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`sm:hidden ${
            mobileNavOpen ? 'block' : 'hidden'
          } absolute top-full bg-white z-20 w-full`}
          id="mobile-menu"
        >
          <div className="space-y-1 pb-3 pt-2">
            {links.map((link) => (
              <NavLink
                key={`mobile-${link.path}`}
                href={link.path}
                activeClassName="border-primary-dark bg-primary-light bg-opacity-30 text-primary-dark block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                className="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium "
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          {session && session.user ? (
            <div className="border-t border-b border-gray-200 pb-3 pt-4">
              <NavProfile
                email={session?.user?.email || ''}
                name={session?.user?.name || ''}
                img={session?.user.image}
                primaryColor={session.user.primaryColor}
                secondaryColor={session.user.secondaryColor}
                showImage
              />
              <div className="mt-3 space-y-1">
                <LogoutButton className="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium ">
                  Log Out
                </LogoutButton>
                <ProfileButton className="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium " />
                {profileLinks.map((link) => (
                  <NavLink
                    key={`mobile-${link.path}`}
                    href={link.path}
                    activeClassName="border-primary-dark bg-primary-light bg-opacity-30 text-primary-dark block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                    className="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium "
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <LoginButton className="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium ">
              Log in <span aria-hidden="true">&rarr;</span>
            </LoginButton>
          )}
        </div>
      </nav>
      <div data-slot="slot1">{Slot1}</div>
    </>
  );
};
