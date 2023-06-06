'use client';

import { ToastContainer } from '@/components/toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

type Props = {
  children?: React.ReactNode;
};

const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

const ReactQueryProvider = ({ children }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 15 * 60 * 1000,
        refetchInterval: 15 * 60 * 100,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export function Providers({ children }: Props) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>
        <ToastContainer />
        {children}
      </NextAuthProvider>
    </ReactQueryProvider>
  );
}
