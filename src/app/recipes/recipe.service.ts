import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/reducers';
import { RecipeActions } from '../actions/recipe';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes = this.store.select<Recipe[]>('recipes');

  constructor(
    private http: Http,
    private store: Store<AppState>,
    private recipeActions: RecipeActions) {}

  getRecipes(): Observable<Recipe[]> {
    return this.recipes;
  }

  getRecipe(id: number) {
    let recipes: Recipe[] = [];
    this.store.select<Recipe[]>('recipes').subscribe((_recipes: Recipe[]) => recipes = _recipes);
    return recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    return this.store.dispatch(this.recipeActions.deleteRecipeSuccess(recipe));
  }

  addRecipe(recipe: Recipe) {
    return this.store.dispatch(this.recipeActions.addRecipeSuccess(recipe));
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    return this.store.dispatch(this.recipeActions.saveRecipeSuccess(oldRecipe, newRecipe))
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.put('https://recipebook-927d2.firebaseio.com/recipes.json', body, {
      headers: headers
    });
  }

  fetchData() {
    return this.http.get('https://recipebook-927d2.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.store.dispatch(this.recipeActions.loadRecipesSuccess(data));
          this.recipesChanged.emit(data);
        }
      );
  }

}
