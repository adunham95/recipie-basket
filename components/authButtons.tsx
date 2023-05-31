'use client';

import { APP_URL, AUTH_URL } from '@/lib/appUrls';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

interface IAuthButton {
  children?: React.ReactNode;
  className?: string;
}

export const LoginButton = ({
  children = 'Sign In',
  className = '',
}: IAuthButton) => {
  return (
    <button className={className} onClick={() => signIn()}>
      {children}
    </button>
  );
};

export const RegisterButton = ({
  children = 'Register',
  className = '',
}: IAuthButton) => {
  return (
    <Link href={AUTH_URL.REGISTER} className={className}>
      {children}
    </Link>
  );
};

export const LogoutButton = ({
  children = 'Sign Out',
  className = '',
}: IAuthButton) => {
  return (
    <button className={className} onClick={() => signOut()}>
      {children}
    </button>
  );
};

export const ProfileButton = ({
  children = 'Profile',
  className = '',
}: IAuthButton) => {
  return (
    <Link href={APP_URL.PROFILE} className={className}>
      {children}
    </Link>
  );
};

interface IAccountButton {
  primaryClassName?: string;
  secondaryClassName?: string;
}

export const AccountButton = (props: IAccountButton) => {
  const { primaryClassName, secondaryClassName } = props;
  const { data: session } = useSession();

  console.log(session);

  if (session) {
    return (
      <>
        <LogoutButton className={secondaryClassName} />
        <ProfileButton className={primaryClassName} />
      </>
    );
  }
  return (
    <>
      <RegisterButton className={secondaryClassName} />
      <LoginButton className={primaryClassName} />
    </>
  );
};
