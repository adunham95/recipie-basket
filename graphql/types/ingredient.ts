import { prisma } from '@/lib/prisma';
import { builder } from '../builder';

builder.prismaObject('Ingredient', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    image: t.exposeString('image'),
  }),
});

builder.queryField('allIngredient', (t) =>
  t.prismaField({
    type: ['Ingredient'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.ingredient.findMany({ ...query }),
  }),
);

builder.mutationField('createIngredient', (t) =>
  t.prismaField({
    type: 'Ingredient',
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

      return prisma.ingredient.create({
        ...query,
        data: {
          name,
          image,
        },
      });
    },
  }),
);
