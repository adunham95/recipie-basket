import { prisma } from '@/lib/prisma';
import { builder } from '../builder';

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email', { nullable: true }),
    image: t.exposeString('image', { nullable: true }),
    bookmarks: t.relation('bookmarks', { nullable: true }),
  }),
});

builder.queryField('users', (t) =>
  t.prismaField({
    type: ['User'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.user.findMany({ ...query }),
  }),
);