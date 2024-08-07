import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { PlaceHolderDirective } from "./placeholder.directive";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
  declarations: [
    DropdownDirective,
    PlaceHolderDirective,
    AlertComponent,
  ],

  imports: [
    CommonModule,
    LoadingSpinnerComponent,
  ],
  exports: [
    DropdownDirective,
    PlaceHolderDirective,
    AlertComponent,
    LoadingSpinnerComponent,
    CommonModule
  ]
})
export class SharedModule { }
