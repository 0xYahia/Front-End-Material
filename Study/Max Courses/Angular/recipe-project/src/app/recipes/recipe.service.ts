import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

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

  get () {
    return this.recipes.slice()
  }
}
