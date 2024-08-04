import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  userSub: Subscription;
  isAuthenticated: boolean = false;

  constructor(private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      // this.isAuthenticated = !user ? false : true;
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }
  onSaveData(): void {
    this.recipeService.storeRecipe();
  }

  onFetchData(): void {
    this.recipeService.fetchRecipe().subscribe();
  }
}
