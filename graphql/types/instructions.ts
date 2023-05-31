import { builder } from '../builder';

builder.prismaObject('Instructions', {
  fields: (t) => ({
    id: t.exposeID('id'),
    order: t.exposeInt('order'),
    description: t.exposeString('description'),
  }),
});
