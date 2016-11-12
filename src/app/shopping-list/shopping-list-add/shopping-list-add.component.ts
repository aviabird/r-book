import { ShoppingListService } from './../shopping-list.service';
import { Component, OnChanges, EventEmitter } from '@angular/core';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css'],
  inputs: ['item'],
  outputs: ['cleared']
})
export class ShoppingListAddComponent implements OnChanges {
  item: Ingredient;
  isAdd: boolean = true;
  cleared = new EventEmitter();

  constructor(private sls: ShoppingListService) { }

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
      this.sls.editItem(this.item, newIngredient);
    } else {
      this.item = newIngredient
      this.sls.addItem(this.item)
    }
  }

  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }
}
