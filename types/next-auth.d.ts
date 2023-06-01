import NextAuth from 'next-auth';

interface IAuthUser {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  name: string;
  primaryColor?: string;
  randomKey: string;
  secondaryColor?: string;
  image?: string;
}

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: IAuthUser;
  }
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
    user: IAuthUser;
  }
}
