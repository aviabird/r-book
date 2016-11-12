import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import { Recipe } from '../models/recipe';

@Injectable()
export class RecipeActions {
    static LOAD_RECIPES = '[Recipe] Load Recipes';
    loadRecipes(): Action {
        return {
            type: RecipeActions.LOAD_RECIPES
        };
    }

    static LOAD_RECIPES_SUCCESS = '[Recipe] Load Recipes Success';
    loadRecipesSuccess(recipes): Action {
        return {
            type: RecipeActions.LOAD_RECIPES_SUCCESS,
            payload: recipes
        };
    }

    static GET_RECIPE = '[Recipe] Get Recipe';
    getRecipe(id): Action {
        return {
            type: RecipeActions.GET_RECIPE,
            payload: id
        };
    }

    static GET_RECIPE_SUCCESS = '[Recipe] Get Recipe Success';
    getRecipeSuccess(recipe): Action {
        return {
            type: RecipeActions.GET_RECIPE_SUCCESS,
            payload: recipe
        };
    }

    static RESET_BLANK_RECIPE = '[Recipe] Reset Blank Recipe';
    resetBlankRecipe(): Action {
        return {
            type: RecipeActions.RESET_BLANK_RECIPE
        };
    }

    static SAVE_RECIPE = '[Recipe] Save Recipe';
    saveRecipe(recipe): Action {
        return {
            type: RecipeActions.SAVE_RECIPE,
            payload: recipe
        };
    }

    static UPDATE_RECIPE_SUCCESS = '[Recipe] Save Recipe Success';
    saveRecipeSuccess(oldRecipe, newRecipe): Action {
        return {
            type: RecipeActions.UPDATE_RECIPE_SUCCESS,
            payload: {oldRecipe: oldRecipe, newRecipe: newRecipe}
        };
    }

    static ADD_RECIPE = '[Recipe] Add Recipe';
    addRecipe(recipe): Action {
        return {
            type: RecipeActions.ADD_RECIPE,
            payload: recipe
        };
    }

    static ADD_RECIPE_SUCCESS = '[Recipe] Add Recipe Success';
    addRecipeSuccess(recipe): Action {
        return {
            type: RecipeActions.ADD_RECIPE_SUCCESS,
            payload: recipe
        };
    }

    static DELETE_RECIPE = '[Recipe] Delete Recipe';
    deleteRecipe(recipe): Action {
        return {
            type: RecipeActions.DELETE_RECIPE,
            payload: recipe
        };
    }

    static DELETE_RECIPE_SUCCESS = '[Recipe] Delete Recipe Success';
    deleteRecipeSuccess(recipe): Action {
        return {
            type: RecipeActions.DELETE_RECIPE_SUCCESS,
            payload: recipe
        };
    }
}