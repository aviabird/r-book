import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { Recipe } from '../models/recipe';
import { RecipeActions } from '../actions/recipe';
import { Ingredient } from '../models/ingredient';

export type RecipeListState = Recipe[];

const initialState: RecipeListState = [
    new Recipe('Three Layered Rice', 'Three Layered Rice', 'http://www.ndtv.com/cooks/images/three-layered-rice_article.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Meat', 1)
    ]),
    new Recipe('Diet Recipe', 'Diet Recipe', 'http://www.quickdietprogram.com/wp-content/uploads/2011/03/Finding-the-Best-Healthy-Diet-Recipes.jpg', [])
  ];;

export default function (state = initialState, action: Action): RecipeListState {
    switch (action.type) {
        case RecipeActions.LOAD_RECIPES_SUCCESS: {
            return action.payload;
        }
        case RecipeActions.ADD_RECIPE_SUCCESS: {
            return [...state, action.payload];
        }
        case RecipeActions.UPDATE_RECIPE_SUCCESS: {
            let index = state.indexOf(action.payload.oldRecipe);
            if (index >= 0) {
                return [
                    ...state.slice(0, index),
                    action.payload.newRecipe,
                    ...state.slice(index + 1)
                ];
            }
            return state;
        }
        case RecipeActions.DELETE_RECIPE_SUCCESS: {
            return state.filter(recipe => {
                return recipe !== action.payload;
            });
        }
        default: {
            return state;
        }
    }
}