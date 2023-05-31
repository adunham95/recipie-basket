import { authOptions } from '@/lib/auth';
import { Session, getServerSession } from 'next-auth';

interface CustomSession extends Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    id?: string | null;
    randomKey?: string | null;
  };
}

export async function createContext() {
  const session = (await getServerSession(authOptions)) as CustomSession | null;
  console.log({ session });

  // if the user is not logged in, return an empty object
  if (!session || typeof session === 'undefined') return {};

  const { user } = session;

  return {
    user,
  };
}
