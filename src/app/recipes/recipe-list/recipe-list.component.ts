import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RecipeService } from '../recipe.service'
import { Recipe } from '../../models/recipe';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RecipeListComponent implements OnInit {
  recipes: Observable<Recipe[]>;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    // this.recipeService.recipesChanged.subscribe(
    //   (recipes: Recipe[]) => this.recipes = recipes
    // );
  }
}
