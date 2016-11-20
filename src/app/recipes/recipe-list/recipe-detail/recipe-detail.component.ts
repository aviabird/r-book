import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingListService } from '../../../shopping-list/shopping-list.service'
import { Subscription } from 'rxjs/rx'
import { Recipe } from '../../../models/recipe';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers/reducers';
import { RecipeActions } from '../../../actions/recipe';
import { IngredientActions } from '../../../actions/ingredient';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Observable<Recipe>;
  private recipeIndex: number = 1;
  private subscription: Subscription;

  constructor(
    private sls: ShoppingListService, 
    private router: Router, 
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private recipeActions: RecipeActions,
    private ingredientActions: IngredientActions
  ) {
    this.selectedRecipe = this.store.select<Recipe>('recipe');
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.store.dispatch(this.recipeActions.getRecipe(this.recipeIndex));
      }
    );
  }

  onEdit() {
    this.router.navigate(['/recipes/', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.store.dispatch(this.recipeActions.deleteRecipe(this.recipeIndex));
    this.router.navigate(['/recipes/']);
  }

  onAddToShoppingList() {
    this.selectedRecipe.subscribe(
      recipe => {
        return this.store.dispatch(
          this.ingredientActions.addIngredients(recipe.ingredients)
        )
      }
    ).unsubscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
