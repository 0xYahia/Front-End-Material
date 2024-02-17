import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>;
  private  recipes: Recipe[] = [
    new Recipe(
      'Tasty schnitzel',
      'This is simply a test',
      './assets/1.jpg'
    ,
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Frise', 10),
      ]),
    new Recipe(
      'Big fat burger',
      'This is simply a test',
      './assets/2.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 20),
      ])
  ];

  constructor(private _shoppingListService: ShoppingListService) {
  }

  get () {
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this._shoppingListService.addIngredients(ingredients)
  }
}
