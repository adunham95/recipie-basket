import { prisma } from '@/lib/prisma';
import { builder } from '../builder';

builder.prismaObject('Recipe', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    description: t.exposeString('description'),
    user: t.relation('user', { nullable: true }),
    ingredients: t.relation('ingredients', { nullable: true }),
    instructions: t.relation('instructions', { nullable: true }),
  }),
});

//TODO update to only fetch my recipes
builder.queryField('recipes', (t) =>
  t.prismaField({
    type: ['Recipe'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.recipe.findMany({ ...query }),
  }),
);

const RecipeInstructionInput = builder.inputType('RecipeInstructionInput', {
  fields: (t) => ({
    order: t.int({ required: true }),
    description: t.string({ required: true }),
  }),
});

const RecipeIngredientsInput = builder.inputType('RecipeIngredientsInput', {
  fields: (t) => ({
    count: t.float({ required: true }),
    item: t.string({ required: true }),
    type: t.string({ required: true }),
  }),
});

builder.mutationField('createRecipe', (t) =>
  t.prismaField({
    type: 'Recipe',
    args: {
      title: t.arg.string({ required: true }),
      description: t.arg.string({ required: false }),
      instructions: t.arg({ type: [RecipeInstructionInput], required: true }),
      ingredients: t.arg({ type: [RecipeIngredientsInput], required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { title, description = '', instructions, ingredients } = args;

      if (!(await ctx).user) {
        throw new Error('You have to be logged in to perform this action');
      }

      return await prisma.recipe.create({
        data: {
          title,
          description: description || '',
          userID: (await ctx)?.user?.id || '',
          instructions: {
            createMany: {
              data: instructions,
            },
          },
          ingredients: {
            createMany: {
              data: ingredients,
            },
          },
        },
      });
    },
  }),
);
