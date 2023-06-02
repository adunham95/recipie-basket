import { builder } from '../builder';

builder.prismaObject('Ingredients', {
  fields: (t) => ({
    id: t.exposeID('id'),
    item: t.relation('ingredient'),
    count: t.exposeFloat('count'),
    type: t.exposeString('type'),
  }),
});
