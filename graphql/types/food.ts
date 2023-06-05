import { prisma } from '@/lib/prisma';
import { builder } from '../builder';

builder.prismaObject('Food', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    image: t.exposeString('image', { nullable: true }),
  }),
});

builder.queryField('allFood', (t) =>
  t.prismaField({
    type: ['Food'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.food.findMany({ ...query }),
  }),
);

builder.mutationField('createFood', (t) =>
  t.prismaField({
    type: 'Food',
    args: {
      name: t.arg.string({ required: true }),
      image: t.arg.string(),
    },
    resolve: async (query, _parent, args, ctx) => {
      console.log({ ctx });
      const { name, image = '' } = args;

      if (!(await ctx).user) {
        throw new Error('You have to be logged in to perform this action');
      }

      const data = {
        name,
        ...(image && { image }),
      };

      return prisma.food.create({
        ...query,
        data,
      });
    },
  }),
);
