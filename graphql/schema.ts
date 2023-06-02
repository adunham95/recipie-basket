import './types/links';
import './types/user';
import './types/recipe';
import './types/ingredients';
import './types/instructions';
import './types/categories';
import './types/ingredient';
import { builder } from './builder';

export const schema = builder.toSchema();
