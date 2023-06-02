import { prisma } from '@/lib/prisma';
import { builder } from '../builder';

builder.prismaObject('Category', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
  }),
});

builder.queryField('categories', (t) =>
  t.prismaField({
    type: ['Category'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.category.findMany({ ...query }),
  }),
);

builder.mutationField('createCategory', (t) =>
  t.prismaField({
    type: 'Category',
    args: {
      title: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      console.log({ ctx });
      const { title } = args;

      if (!(await ctx).user) {
        throw new Error('You have to be logged in to perform this action');
      }

      return prisma.category.create({
        ...query,
        data: {
          title,
        },
      });
    },
  }),
);
