import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Store } from "@ngrx/store";
import { ShoppingListService } from './service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients!: Observable<{ ingredients: Ingredient[]}>;

  constructor( private slService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[] }}>) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
  }
  
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

}
