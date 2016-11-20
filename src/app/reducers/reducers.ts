import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
//import {storeLogger} from 'ngrx-store-logger';
import {combineReducers} from '@ngrx/store';

import recipeListReducer, * as fromRecipeList from './recipe-list';
import recipeReducer, * as fromRecipe from './recipe';
import ingredientReducer, * as fromIngredient from './ingredient';
import ingredientListReducer, * as fromIngredientList from './ingredient-list';

export interface AppState {
    recipes: fromRecipeList.RecipeListState;
    recipe: fromRecipe.RecipeState;
    ingredient: fromIngredient.IngredientState;
    ingredients: fromIngredientList.IngredientListState;
};

//uncomment the storeLogger import and this line
//and comment out the other export default line to turn on
//the store logger to see the actions as they flow through the store
//turned this off by default as i found the logger kinda noisy

//export default compose(storeLogger(), combineReducers)({
export default compose(combineReducers)({
    recipes: recipeListReducer,
    recipe: recipeReducer,
    ingredient: ingredientReducer,
    ingredients: ingredientListReducer
});