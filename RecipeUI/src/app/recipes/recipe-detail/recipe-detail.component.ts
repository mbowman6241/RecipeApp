import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/recipes/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe?: Recipe;
  id!: number;
  router: string;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private _router: Router) {
    this.router = _router.url;
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  // onAddToShoppingList() {
  //   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }

  onEditRecipe() {
    this._router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this._router.navigate(['/recipes']);
  }
}
