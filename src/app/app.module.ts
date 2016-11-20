import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Store, StoreModule } from '@ngrx/store';
import reducers from './reducers/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { EffectsModule, Effect } from '@ngrx/effects';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-list/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service'
import { AppRoutes } from './app.routes';
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeEffects } from './effects/recipe';
import { RecipeService } from './recipes/recipe.service';
import { RecipeActions } from './actions/recipe';
import { IngredientActions } from './actions/ingredient';
import { IngredientEffects } from './effects/ingredient';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBHVpvBNxHymRt7BxV03WhAJtPjKNG1zuQ",
  authDomain: "recipebook-927d2.firebaseapp.com",
  databaseURL: "https://recipebook-927d2.firebaseio.com",
  storageBucket: "recipebook-927d2.appspot.com",
  messagingSenderId: "979824750533"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    AppRoutes,
    ReactiveFormsModule,
    StoreModule.provideStore(reducers),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    EffectsModule.run(RecipeEffects),
    EffectsModule.run(IngredientEffects),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    RecipeActions,
    IngredientActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
