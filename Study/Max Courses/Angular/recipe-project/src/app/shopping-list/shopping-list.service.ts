import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
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

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient)
    // }
    this.ingredients.push(...ingredients)
    this.ingredientChanged.emit(this.ingredients.slice())
  }

}
