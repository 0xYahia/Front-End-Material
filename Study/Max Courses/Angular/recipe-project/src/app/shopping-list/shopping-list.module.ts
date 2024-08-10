import { NgModule } from "@angular/core";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { LoggingService } from "../logging.service";

const router: Routes = [{ path: '', component: ShoppingListComponent }];

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    RouterModule.forChild(router)
  ],
  // providers: [LoggingService]

})
export class ShoppingListModule { }
