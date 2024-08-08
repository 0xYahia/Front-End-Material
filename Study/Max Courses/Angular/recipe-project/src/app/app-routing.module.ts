import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



const appRouting: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: "full" },
  { path: 'recipes', loadChildren: () => import('./recipes/recipe.module').then(m => m.RecipeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouting)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
