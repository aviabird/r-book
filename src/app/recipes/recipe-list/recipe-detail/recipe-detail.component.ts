import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe'
@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  inputs: ['selectedRecipe']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
