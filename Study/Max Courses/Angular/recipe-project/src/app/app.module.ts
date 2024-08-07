import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { NgOptimizedImage } from "@angular/common";
import { DropdownDirective } from "./shared/dropdown.directive";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { AuthInterceptor } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceHolderDirective } from './shared/placeholder.directive';
import { RecipeModule } from './recipes/recipe.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    DropdownDirective,
    AuthComponent,
    AlertComponent,
    PlaceHolderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
    AppRoutingModule,
    LoadingSpinnerComponent,
    LoadingSpinnerComponent,
    RecipeModule,
    ShoppingListModule
  ],
  providers: [ShoppingListService, RecipeService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
