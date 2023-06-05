import { IFood } from './ingredient';

interface IIngredientItem {
  id: string;
  foodID: string;
  food?: IFood;
  count: number;
  type: string;
}
