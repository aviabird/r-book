import { Injectable } from '@angular/core';
import { Recipe } from './recipe'
import { Ingredient } from '../shared/ingredient'

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Three Layered Rice', 'Three Layered Rice', 'http://www.ndtv.com/cooks/images/three-layered-rice_article.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Meat', 1)
    ]),
    new Recipe('Diet Recipe', 'Diet Recipe', 'http://www.quickdietprogram.com/wp-content/uploads/2011/03/Finding-the-Best-Healthy-Diet-Recipes.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

}
