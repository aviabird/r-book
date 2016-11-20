import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/reducers';
import { RecipeActions } from '../actions/recipe';
import { Observable } from 'rxjs/Observable';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  db: any;

  constructor(
    private http: Http,
    private store: Store<AppState>,
    private recipeActions: RecipeActions,
    private af: AngularFire
  ) {
    this.db = this.af.database;
  }

  getRecipe(key) {
    return this.db.object(`recipes/${key}`);
  }

  saveRecipe(recipe) {
    let key = recipe.$key;
    delete recipe['$key'];
    this.db.object(`recipes/${key}`).set(recipe)
    return this.db.list('recipes');
  }

  addRecipe(recipe) {
    return this.db.list('recipes').push(recipe);
  }

  getRecipes() {
    return this.af.database.list('/recipes');
  }

}
