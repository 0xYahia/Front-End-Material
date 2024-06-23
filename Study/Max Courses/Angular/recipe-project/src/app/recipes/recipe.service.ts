import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
  // recipeSelected = new Subject<Recipe>;
  recipesChanged$ = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
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

  constructor(private shoppingListService: ShoppingListService) {
  }

  get(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipeById(index: number): Recipe {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged$.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged$.next(this.recipes.slice());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged$.next(this.recipes.slice());
  }
}
