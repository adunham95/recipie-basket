import { compare } from 'bcryptjs';
import { prisma } from './prisma';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !(await compare(credentials.password, user.password))) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          name: `${user.firstName} ${user.lastName}`,
          primaryColor: user.primaryColor,
          secondaryColor: user.secondaryColor,
          randomKey: 'Hey cool',
        };
      },
    }),
  ],
  callbacks: {
    session: async ({ session, user, token }) => {
      console.log('Session Callback', { session, user, token });
      return Promise.resolve({
        ...session,
        user: {
          ...session.user,
          ...token.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      });
    },
    jwt: async ({ token, user, account, profile, trigger, session }) => {
      console.log('JWT Callback', {
        token,
        user,
        account,
        profile,
        trigger,
        session,
      });
      if (trigger === 'update') {
        // update your token whatever you like
        return Promise.resolve({
          ...token,
          user: {
            ...token.user,
            ...session,
          },
        });
      }
      if (user) {
        console.log(user);
        const u = user as unknown as any;
        return Promise.resolve({
          ...token,
          user: u,
          id: u.id,
          randomKey: u.randomKey,
        });
      }
      return Promise.resolve(token);
    },
  },
};
