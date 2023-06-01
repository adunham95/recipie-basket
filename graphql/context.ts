import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export async function createContext() {
  const session = await getServerSession(authOptions);
  console.log({ session });

  // if the user is not logged in, return an empty object
  if (!session || typeof session === 'undefined') return {};

  const { user } = session;

  return {
    user,
  };
}
