import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service'
import { RecipeActions } from './actions/recipe';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, RecipeActions]
})
export class AppComponent {
  title = 'rb works!';
}