import { Component } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/reducers';
import { RecipeActions } from '../actions/recipe';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private recipeService: RecipeService,
    private store: Store<AppState>,
    private recipeActions: RecipeActions
  ) { };

}
