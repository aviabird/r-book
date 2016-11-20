import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import { Recipe } from '../models/recipe';
import { type } from '../utils';

export const ActionTypes = {
    LOAD_RECIPES: type('[Recipe] Load Recipes'),
    LOAD_RECIPES_SUCCESS: type('[Recipe] Load Recipes Success'),
    GET_RECIPE: type('[Recipe] Get Recipe'),
    GET_RECIPE_SUCCESS: type('[Recipe] Get Recipe Success'),    
    RESET_BLANK_RECIPE: type('[Recipe] Reset Blank Recipe'),
    SAVE_RECIPE: type('[Recipe] Save Recipe'),
    SAVE_RECIPE_SUCCESS: type('[Recipe] Save Recipe Success'),
    ADD_RECIPE: type('[Recipe] Add Recipe'),
    ADD_RECIPE_SUCCESS: type('[Recipe] Add Recipe Success'),
    DELETE_RECIPE: type('[Recipe] Delete Recipe'),
    DELETE_RECIPE_SUCCESS: type('[Recipe] Delete Recipe Success')
};

@Injectable()
export class RecipeActions {
    loadRecipes(): Action {
        return {
            type: ActionTypes.LOAD_RECIPES
        };
    }

    loadRecipesSuccess(recipes): Action {
        return {
            type: ActionTypes.LOAD_RECIPES_SUCCESS,
            payload: recipes
        };
    }

    getRecipe(id): Action {
        return {
            type: ActionTypes.GET_RECIPE,
            payload: id
        };
    }

    getRecipeSuccess(recipe): Action {
        return {
            type: ActionTypes.GET_RECIPE_SUCCESS,
            payload: recipe
        };
    }

    resetBlankRecipe(): Action {
        return {
            type: ActionTypes.RESET_BLANK_RECIPE
        };
    }
    
    saveRecipe(recipes): Action {
        return {
            type: ActionTypes.SAVE_RECIPE,
            payload: recipes
        };
    }
    
    saveRecipeSuccess(recipes): Action {
        return {
            type: ActionTypes.SAVE_RECIPE_SUCCESS,
            payload: recipes
        };
    }
    
    addRecipe(recipe): Action {
        return {
            type: ActionTypes.ADD_RECIPE,
            payload: recipe
        };
    }
    
    addRecipeSuccess(recipe): Action {
        return {
            type: ActionTypes.ADD_RECIPE_SUCCESS,
            payload: recipe
        };
    }
    
    deleteRecipe(id): Action {
        return {
            type: ActionTypes.DELETE_RECIPE,
            payload: id
        };
    }

    deleteRecipeSuccess(id): Action {
        return {
            type: ActionTypes.DELETE_RECIPE_SUCCESS,
            payload: id
        };
    }
}