import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  igChangeSub: Subscription;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.get();
    // this._shoppingListService.ingredient.subscribe((ingredient:Ingredient) => {
    //   this.ingredients.push(res)
    // })
    this.igChangeSub = this.shoppingListService.ingredientChanged$.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  // onIngredientAdded(newIngredient: Ingredient) {
  //   this.ingredients.push(newIngredient)
  // }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
