import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { RecipeService } from "./recipe.service";
import { Recipe } from "./recipe.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(private recipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Recipe[] {
    const recipes: Recipe[] = this.recipeService.get();
    return recipes.length === 0 ? this.recipeService.fetchRecipe() : recipes;
  }
}
