import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RecipeService } from '../recipe.service'
import { Recipe } from '../../models/recipe';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/reducers';
import { RecipeActions } from '../../actions/recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RecipeListComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  constructor(
    private recipeService: RecipeService,
    private store: Store<AppState>,
    private recipeActions: RecipeActions
  ) {
    this.recipes$ = this.store.select<Recipe[]>('recipes');
  }

  ngOnInit() {
    this.store.dispatch(this.recipeActions.loadRecipes())
  }
}
