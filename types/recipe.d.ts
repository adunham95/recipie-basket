import { IInstructionItem } from '@/types/instructionItem';
import { IIngredientItem } from './ingredinetItem';

export interface IRecipe {
  title: string;
  description?: string;
  image?: string;
  serving?: number;
  instructions: IInstructionItem[];
  ingredients: IIngredientItem[];
  categoryIds: string[];
}
