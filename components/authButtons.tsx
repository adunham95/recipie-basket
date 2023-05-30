'use client';

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
    <Link href="/register" className={className}>
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
    <Link href="/profile" className={className}>
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
        <button className={secondaryClassName} onClick={() => signOut()}>
          Sign Out
        </button>
        <Link href="/profile" className={primaryClassName}>
          Profile
        </Link>
      </>
    );
  }
  return (
    <>
      <Link href="/register" className={secondaryClassName}>
        Register
      </Link>
      <button className={primaryClassName} onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
};
