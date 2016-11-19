import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { Recipe } from '../models/recipe';
import { ActionTypes } from '../actions/recipe';
import { Ingredient } from '../models/ingredient';

export type RecipeListState = Recipe[];

const initialState: RecipeListState = [];

export default function (state = initialState, action: Action): RecipeListState {
    switch (action.type) {
        case ActionTypes.LOAD_RECIPES_SUCCESS: {
            return action.payload;
        }
        case ActionTypes.ADD_RECIPE_SUCCESS: {
            return [...state, action.payload];
        }
        case ActionTypes.SAVE_RECIPE_SUCCESS: {
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
        case ActionTypes.DELETE_RECIPE_SUCCESS: {
            return state.filter((recipe, index) => index != action.payload);
        }
        default: {
            return state;
        }
    }
}