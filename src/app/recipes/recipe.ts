import { Ingredient } from '../shared/ingredient';
export class Recipe {
  constructor(public  name, public discription, public imagePath, public ingredients: Ingredient[]) {

  }
}
