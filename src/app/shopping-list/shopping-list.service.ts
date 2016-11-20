import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Store } from '@ngrx/store';
import { IngredientActions } from '../actions/ingredient';
import { AppState } from '../reducers/reducers';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';

@Injectable()
export class ShoppingListService {
  db: any;

  constructor(
    private store: Store<AppState>,
    private recipeActions: IngredientActions,
    private af: AngularFire
  ) {
    this.db = this.af.database;
  }

  getIngredients() {
    return this.db.list('ingredients');
  }

  addIngredient(ingredient) {
    return this.db.list('ingredients').push(ingredient);
  }

  addIngredients(ingredients) {
    ingredients.forEach(ingredient => {
      this.addIngredient(ingredient);
    });
  }

  saveIngredient(payload) {
    return this.db.object(`ingredients/${payload.key}`).set(payload.ingredient)
  }

  deleteIngredient(key) {
    return this.db.list('ingredients').remove(key);
  }

}
