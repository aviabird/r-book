import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Store } from '@ngrx/store';
import { IngredientActions } from '../actions/ingredient';
import { AppState } from '../reducers/reducers';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] =[];

  constructor(
    private store: Store<AppState>,
    private recipeActions: IngredientActions
  ) {
    this.store.select<Ingredient[]>('ingredients')
      .subscribe(ingredients => this.ingredients = ingredients)
  }

  getIngredients() {
    return Observable.from([this.ingredients]);
  }

}
