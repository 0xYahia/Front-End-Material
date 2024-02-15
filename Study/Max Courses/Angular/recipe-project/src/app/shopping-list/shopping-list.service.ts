import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  // ingredient = new EventEmitter<Ingredient>
  ingredientChanged = new EventEmitter<Ingredient[]>
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];



  get() {
    return  this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredientChanged.emit(this.ingredients.slice())
  }

}
