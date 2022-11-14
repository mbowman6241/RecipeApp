import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeResolverService } from './recipes/services/recipe-resolver.service';

const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'recipes', loadChildren: () => import('./recipes/recipe.module').then(x => x.RecipeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  // imports: [RouterModule.forChild(routes)],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
