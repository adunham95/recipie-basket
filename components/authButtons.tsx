'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn()}>
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
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
