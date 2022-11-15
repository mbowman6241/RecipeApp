import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';

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
  exports: [RouterModule]
})
export class AppRoutingModule { }
