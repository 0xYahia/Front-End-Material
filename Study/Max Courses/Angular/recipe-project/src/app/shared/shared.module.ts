import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { PlaceHolderDirective } from "./placeholder.directive";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { LoggingService } from "../logging.service";

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
  ],
  // providers: [LoggingService]
})
export class SharedModule { }
