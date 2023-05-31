import { prisma } from '@/lib/prisma';
import { builder } from '../builder';

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email', { nullable: true }),
    image: t.exposeString('image', { nullable: true }),
    bookmarks: t.relation('bookmarks', { nullable: true }),
    recipes: t.relation('recipies', { nullable: true }),
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
