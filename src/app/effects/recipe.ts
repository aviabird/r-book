import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { RecipeService } from '../recipes/recipe.service';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as recipe from '../actions/recipe';
import { AppState } from '../reducers/reducers';
import { RecipeActions } from '../actions/recipe';
import 'rxjs/add/operator/switchMap';
import { Recipe } from '../models/recipe';

@Injectable()
export class RecipeEffects {
  constructor(
    private actions$: Actions,
    private recipeService: RecipeService,
    private recipeActions: RecipeActions
  ) {}

  @Effect() loadRecipes$ = this.actions$
    .ofType(recipe.ActionTypes.LOAD_RECIPES)
    .switchMap(() => this.recipeService.getRecipes())
    .map(recipes => this.recipeActions.loadRecipesSuccess(recipes))

  @Effect() getRecipe$ = this.actions$
    .ofType(recipe.ActionTypes.GET_RECIPE)
    .map(action => action.payload)
    .switchMap(id => this.recipeService.getRecipe(id))
    .map(recipe => this.recipeActions.getRecipeSuccess(recipe));
  
  @Effect() addRecipe$ = this.actions$
    .ofType(recipe.ActionTypes.ADD_RECIPE)
    .map<Recipe>((action) => action.payload)
    .switchMap(recipe => this.recipeService.addRecipe(recipe))
    .map(() => this.recipeActions.addRecipeSuccess())
  
  @Effect() saveRecipe$ = this.actions$
    .ofType(recipe.ActionTypes.SAVE_RECIPE)
    .map(action => action.payload)
    .switchMap(payload => this.recipeService.saveRecipe(payload))
    .map(() => this.recipeActions.saveRecipeSuccess())

  @Effect() deleteRecipe$ = this.actions$
    .ofType(recipe.ActionTypes.DELETE_RECIPE)
    .map(action => action.payload)
    .switchMap(key => this.recipeService.deleteRecipe(key))
    .map(() => this.recipeActions.deleteRecipeSuccess());
}