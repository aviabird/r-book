import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import { Ingredient } from '../models/ingredient';
import { type } from '../utils';

export const ActionTypes = {
    LOAD_INGREDIENTS: type('[Ingredient] Load Ingredients'),
    LOAD_INGREDIENTS_SUCCESS: type('[Ingredient] Load Ingredients Success'),
    GET_INGREDIENT: type('[Ingredient] Get Ingredient'),
    GET_INGREDIENT_SUCCESS: type('[Ingredient] Get Ingredient Success'),    
    RESET_BLANK_INGREDIENT: type('[Ingredient] Reset Blank Ingredient'),
    SAVE_INGREDIENT: type('[Ingredient] Save Ingredient'),
    SAVE_INGREDIENT_SUCCESS: type('[Ingredient] Save Ingredient Success'),
    ADD_INGREDIENT: type('[Ingredient] Add Ingredient'),
    ADD_INGREDIENT_SUCCESS: type('[Ingredient] Add Ingredient Success'),
    ADD_INGREDIENTS: type('[Ingredient] Add Ingredients'),
    ADD_INGREDIENTS_SUCCESS: type('[Ingredient] Add Ingredients Success'),
    DELETE_INGREDIENT: type('[Ingredient] Delete Ingredient'),
    DELETE_INGREDIENT_SUCCESS: type('[Ingredient] Delete Ingredient Success')
};

@Injectable()
export class IngredientActions {
    loadIngredients(): Action {
        return {
            type: ActionTypes.LOAD_INGREDIENTS
        };
    }

    loadIngredientsSuccess(ingredients): Action {
        return {
            type: ActionTypes.LOAD_INGREDIENTS_SUCCESS,
            payload: ingredients
        };
    }

    getIngredient(id): Action {
        return {
            type: ActionTypes.GET_INGREDIENT,
            payload: id
        };
    }

    getIngredientSuccess(ingredient): Action {
        return {
            type: ActionTypes.GET_INGREDIENT_SUCCESS,
            payload: ingredient
        };
    }

    resetBlankIngredient(): Action {
        return {
            type: ActionTypes.RESET_BLANK_INGREDIENT
        };
    }
    
    saveIngredient(oldIngredient, newIngredient): Action {
        return {
            type: ActionTypes.SAVE_INGREDIENT,
            payload: {oldIngredient: oldIngredient, newIngredient: newIngredient}
        };
    }
    
    saveIngredientSuccess(oldIngredient, newIngredient): Action {
        return {
            type: ActionTypes.SAVE_INGREDIENT_SUCCESS,
            payload: {oldIngredient: oldIngredient, newIngredient: newIngredient}
        };
    }
    
    addIngredient(ingredient): Action {
        return {
            type: ActionTypes.ADD_INGREDIENT,
            payload: ingredient
        };
    }
    
    addIngredientSuccess(ingredient): Action {
        return {
            type: ActionTypes.ADD_INGREDIENT_SUCCESS,
            payload: ingredient
        };
    }

    addIngredients(ingredients): Action {
        return {
            type: ActionTypes.ADD_INGREDIENTS,
            payload: ingredients
        };
    }
    
    addIngredientsSuccess(ingredients): Action {
        return {
            type: ActionTypes.ADD_INGREDIENTS_SUCCESS,
            payload: ingredients
        };
    }
    
    deleteIngredient(id): Action {
        return {
            type: ActionTypes.DELETE_INGREDIENT,
            payload: id
        };
    }

    deleteIngredientSuccess(id): Action {
        return {
            type: ActionTypes.DELETE_INGREDIENT_SUCCESS,
            payload: id
        };
    }
}