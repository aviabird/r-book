import {Action} from '@ngrx/store';
import { ActionTypes } from '../actions/ingredient';
import { Ingredient } from '../models/ingredient';

export type IngredientState = Ingredient;

const initialState: IngredientState = new Ingredient(null, 0)

export default function (state = initialState, action: Action): IngredientState {
    switch (action.type) {
        case ActionTypes.RESET_BLANK_INGREDIENT: {
            return initialState;
        }
        case ActionTypes.GET_INGREDIENT_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}