import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent  {
  @ViewChild('inputName' , {static: true}) nameInputRef: ElementRef;
  @ViewChild('inputAmount', {static: true}) amountInputRef: ElementRef;

  // @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();



  constructor(private _shoppingListService: ShoppingListService) { }

  onAddItem() {
    const ingName= this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    // this.ingredientAdded.emit(newIngredient);
    this._shoppingListService.addIngredient(newIngredient)

    //! Another solution
    // this._shoppingListService.ingredient.emit(newIngredient)
  }
}
