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

  private recipes: Recipe[] = [];

  constructor(
    private http: Http,
    private store: Store<AppState>,
    private recipeActions: RecipeActions
  ) {
    this.store.select<Recipe[]>('recipes')
      .subscribe(recipes => this.recipes = recipes)
  }

  getRecipe(id: number) {
    return Observable.from([this.recipes[id]])
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

  getRecipes() {
    return this.http.get('https://recipebook-927d2.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
  }

}
