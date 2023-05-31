import { prisma } from '@/lib/prisma';
import { builder } from '../builder';
import { hash } from 'bcryptjs';
import { getRandomColor } from '@/lib/colorPicket';

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email', { nullable: true }),
    image: t.exposeString('image', { nullable: true }),
    bookmarks: t.relation('bookmarks', { nullable: true }),
    recipes: t.relation('recipies', { nullable: true }),
    primaryColor: t.exposeString('primaryColor', { nullable: true }),
    secondaryColor: t.exposeString('secondaryColor', { nullable: true }),
    firstName: t.exposeString('firstName'),
    lastName: t.exposeString('lastName'),
    name: t.string({
      resolve: (parent) => {
        return `${parent?.firstName} ${parent.lastName}`;
      },
    }),
  }),
});

builder.queryField('users', (t) =>
  t.prismaField({
    type: ['User'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.user.findMany({ ...query }),
  }),
);

builder.mutationField('createUser', (t) =>
  t.prismaField({
    type: 'User',
    args: {
      firstName: t.arg.string({ required: true }),
      lastName: t.arg.string({ required: true }),
      email: t.arg.string({ required: true }),
      password: t.arg.string({ required: true }),
      image: t.arg.string(),
    },
    resolve: async (query, _parent, args, ctx) => {
      console.log({ ctx });
      const { firstName, lastName, email, password, image } = args;

      const hashed_password = await hash(password, 12);
      const [primaryColor, secondaryColor] = getRandomColor();

      return prisma.user.create({
        ...query,
        data: {
          firstName,
          lastName,
          email: email.toLowerCase(),
          image,
          password: hashed_password,
          primaryColor,
          secondaryColor,
        },
      });
    },
  }),
);
