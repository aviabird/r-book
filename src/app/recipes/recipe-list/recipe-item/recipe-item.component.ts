import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe'

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  inputs: ['recipe', 'recipeId']
})
export class RecipeItemComponent implements OnInit {
  recipe: Recipe;
  recipeId: Number;

  constructor() { }

  ngOnInit() {
  }

}
