import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipelist/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes.component';



@NgModule({
  declarations: [
    RecipelistComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipeEditComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
  ]
})
export class RecipeModule { }
