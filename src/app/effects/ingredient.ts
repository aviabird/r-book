import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { AppState } from '../reducers/reducers';
import 'rxjs/add/operator/switchMap';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../models/ingredient';
import { IngredientActions } from '../actions/ingredient';
import * as ingredient from '../actions/ingredient';

@Injectable()
export class IngredientEffects {
  constructor(
    private actions$: Actions,
    private shoppingListService: ShoppingListService,
    private ingredientActions: IngredientActions
  ) {}

  @Effect() loadIngredients$ = this.actions$
    .ofType(ingredient.ActionTypes.LOAD_INGREDIENTS)
    .switchMap(() => this.shoppingListService.getIngredients())
    .map(ingredients => this.ingredientActions.loadIngredientsSuccess(ingredients))
  
  @Effect() addIngredient$ = this.actions$
    .ofType(ingredient.ActionTypes.ADD_INGREDIENT)
    .map((action) => action.payload)
    .map(ingredient => this.shoppingListService.addIngredient(ingredient))
    .map((ingredient) => this.ingredientActions.addIngredientSuccess(ingredient))
  
   @Effect() addIngredients$ = this.actions$
    .ofType(ingredient.ActionTypes.ADD_INGREDIENTS)
    .map((action) => action.payload)
    .map(ingredients => this.shoppingListService.addIngredients(ingredients))
    .map(() => this.ingredientActions.addIngredientsSuccess())
  
  @Effect() saveIngredient$ = this.actions$
    .ofType(ingredient.ActionTypes.SAVE_INGREDIENT)
    .map(action => action.payload)
    .switchMap(payload => this.shoppingListService.saveIngredient(payload))
    .map(() => this.ingredientActions.saveIngredientSuccess());

  @Effect() deleteIngredient$ = this.actions$
    .ofType(ingredient.ActionTypes.DELETE_INGREDIENT)
    .map(action => action.payload)
    .map((key) => this.shoppingListService.deleteIngredient(key))
    .map(() => this.ingredientActions.deleteIngredientSuccess());
}