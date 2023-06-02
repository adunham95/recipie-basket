import { IIngredient } from './ingredient';

interface IIngredientItem {
  id: string;
  ingredientID: string;
  ingredient?: IIngredient;
  count: number;
  type: string;
}
