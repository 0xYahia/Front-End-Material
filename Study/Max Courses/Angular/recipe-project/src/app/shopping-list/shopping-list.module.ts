import { NgModule } from "@angular/core";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

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
  ]

})
export class ShoppingListModule { }
