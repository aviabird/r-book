import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { ActionTypes } from '../actions/ingredient';
import { Ingredient } from '../models/ingredient';

export type IngredientListState = Ingredient[];

const initialState: IngredientListState = [];

export default function (state = initialState, action: Action): IngredientListState {
    switch (action.type) {
        case ActionTypes.LOAD_INGREDIENTS_SUCCESS: {
            return action.payload;
        }
        case ActionTypes.ADD_INGREDIENT_SUCCESS: {
            return [...state, action.payload];
        }
        case ActionTypes.ADD_INGREDIENTS_SUCCESS: {
            return [...state, ...action.payload];
        }
        case ActionTypes.SAVE_INGREDIENT_SUCCESS: {
            let index = state.indexOf(action.payload.oldIngredient);
            if (index >= 0) {
                return [
                    ...state.slice(0, index),
                    action.payload.newIngredient,
                    ...state.slice(index + 1)
                ];
            }
            return state;
        }
        case ActionTypes.DELETE_INGREDIENT_SUCCESS: {
            return state.filter((ingredient, index) => index != action.payload);
        }
        default: {
            return state;
        }
    }
}