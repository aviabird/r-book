import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/rx';
import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../reducers/reducers';
import { Store } from '@ngrx/store';
import { RecipeActions } from '../../actions/recipe';

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  private recipeIndex: string;
  private recipe: Recipe;
  private subscription: Subscription;
  private isNew = true;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>,
    private recipeActions: RecipeActions
  ) {
    this.store.select('recipe').subscribe(
      (recipe: Recipe) => this.recipe = recipe
    );
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.store.dispatch(this.recipeActions.getRecipe(this.recipeIndex));
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
        } else {
          this.isNew = true;
          this.recipe = null;
        }
        this.initForm();
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    if (this.isNew) {
      this.store.dispatch(this.recipeActions.addRecipe(newRecipe));
      this.navigateBack();
    } else {
      this.store.dispatch(this.recipeActions.saveRecipe(this.recipeIndex, newRecipe));
      this.router.navigate(['recipes', this.recipeIndex])
    }
  }

  onCancel() {
    this.navigateBack();
  }

  onAddItem(nameEl: any, amountEl: any) {
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(nameEl.value, Validators.required),
        amount: new FormControl(amountEl.value, [
          Validators.required,
          Validators.pattern("\\d+")
        ])
      })
    );
    nameEl.value = amountEl.value = null;
  }

  onRemoveItem(index: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  private navigateBack() {
    this.router.navigate(['../'])
  }

  private initForm() {
    let recipeName= "";
    let recipeImageUrl= "";
    let recipeContent= "";
    let recipeIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
      if (this.recipe.hasOwnProperty('ingredients')) {
        for (let i = 0; i < this.recipe.ingredients.length; i++) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
              amount: new FormControl(this.recipe.ingredients[i].amount, [
                Validators.required,
                Validators.pattern("\\d+")
              ])
            })
          )
        }
      }
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
  }
}
