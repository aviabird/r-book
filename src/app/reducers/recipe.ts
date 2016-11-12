import {Action} from '@ngrx/store';
import { Recipe } from '../models/recipe';
import { RecipeActions } from '../actions/recipe';

export type RecipeState = Recipe;

const initialState: RecipeState = new Recipe('', '', '', [])

export default function (state = initialState, action: Action): RecipeState {
    switch (action.type) {
        case RecipeActions.RESET_BLANK_RECIPE: {
            return initialState;
        }
        case RecipeActions.GET_RECIPE_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}