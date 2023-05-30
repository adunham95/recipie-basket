'use client';

import { SessionProvider } from 'next-auth/react';

type Props = {
  children?: React.ReactNode;
};

const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export function Providers({ children }: Props) {
  return <NextAuthProvider>{children}</NextAuthProvider>;
}
