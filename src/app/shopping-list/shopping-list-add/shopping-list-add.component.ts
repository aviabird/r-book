import { ShoppingListService } from './../shopping-list.service';
import { Component, OnChanges, EventEmitter } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/reducers';
import { IngredientActions } from '../../actions/ingredient';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css'],
  inputs: ['item'],
  outputs: ['cleared']
})
export class ShoppingListAddComponent implements OnChanges {
  item: any;
  isAdd: boolean = true;
  cleared = new EventEmitter();

  constructor(
    private sls: ShoppingListService,
    private store: Store<AppState>,
    private ingredientActions: IngredientActions
  ) {
    this.store.select<Ingredient>('ingredient').subscribe(
      ingredient => this.item = ingredient
    );
  }

  ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      this.store.dispatch(this.ingredientActions.saveIngredient(this.item.$key, newIngredient));
    } else {
      this.item = newIngredient
      this.store.dispatch(this.ingredientActions.addIngredient(this.item));
    }
    this.onClear();
  }

  onDelete() {
    this.store.dispatch(this.ingredientActions.deleteIngredient(this.item));
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }
}
