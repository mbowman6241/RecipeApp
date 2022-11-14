import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '../recipes/recipelist/recipe-item/recipe-item.component';
import { RecipelistComponent } from '../recipes/recipelist/recipelist.component';
import { RecipeResolverService } from '../recipes/services/recipe-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    resolve: [RecipeResolverService],
    children: [
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService]
      }
    ]
  },
];

@NgModule({
  declarations: [RecipelistComponent,
    RecipeItemComponent,
    HomepageComponent,
    RecipeDetailComponent],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RecipelistComponent,
    RecipeItemComponent,
    HomepageComponent,
    RouterModule,
    RecipeDetailComponent],
  providers: []
})

export class SharedModule { }
