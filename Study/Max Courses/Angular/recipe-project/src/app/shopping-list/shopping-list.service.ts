import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService {
  // ingredient = new EventEmitter<Ingredient>
  ingredientChanged$ = new Subject<Ingredient[]>;
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];



  get(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientChanged$.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient)
    // }
    this.ingredients.push(...ingredients);
    this.ingredientChanged$.next(this.ingredients.slice());
  }

}
