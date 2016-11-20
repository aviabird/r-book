import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/reducers';
import { IngredientActions } from '../actions/ingredient';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Observable<any>;
  selectedItem: Ingredient = null;

  constructor(
    private store: Store<AppState>,
    private ingredientActions: IngredientActions,
  ) {
    this.items = this.store.select('ingredients');
  }

  ngOnInit() {
    this.store.dispatch(this.ingredientActions.loadIngredients());
  }

  onSelectItem(item: Ingredient) {
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null
  }

}
