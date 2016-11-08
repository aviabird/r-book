import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  outputs: ['recipeSelected']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Three Layered Rice', 'Three Layered Rice', 'http://www.ndtv.com/cooks/images/three-layered-rice_article.jpg', []),
    new Recipe('Diet Recipe', 'Diet Recipe', 'http://www.quickdietprogram.com/wp-content/uploads/2011/03/Finding-the-Best-Healthy-Diet-Recipes.jpg', [])
  ];
  recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }
}
