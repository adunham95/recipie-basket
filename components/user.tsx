'use client';

import { useSession } from 'next-auth/react';

export const User = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <pre className=" whitespace-break-spaces">{JSON.stringify(session)}</pre>
    </>
  );
};
