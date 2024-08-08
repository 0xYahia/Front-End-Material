import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";
import { HttpClient, HttpParams } from "@angular/common/http";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class RecipeService {
  // recipeSelected = new Subject<Recipe>;
  recipesChanged$ = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty schnitzel',
  //     'This is simply a test',
  //     './assets/1.jpg'
  //     ,
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Frise', 10),
  //     ]),
  //   new Recipe(
  //     'Big fat burger',
  //     'This is simply a test',
  //     './assets/2.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 20),
  //     ])
  // ];


  private recipes: Recipe[] = [];

  constructor(
    private shoppingListService: ShoppingListService,
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  get(): Recipe[] {
    return this.recipes.slice();
  }

  setRecipe(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipesChanged$.next(this.recipes.slice());
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

  storeRecipe(): void {
    const recipes: Recipe[] = this.get();
    this.http.put('https://ng-cours-recipe-book-ea560-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
      });
  }

  fetchRecipe(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('https://ng-cours-recipe-book-ea560-default-rtdb.firebaseio.com/recipes.json').pipe(
      map(recipes => {
        return recipes?.map(recipe => {
          return { ...recipe, ingredient: recipe.ingredients ? recipe.ingredients : [] };
        });
      }),
      tap(recipes => {
        this.setRecipe(recipes);
      })
    );
  }
}
