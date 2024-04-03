import { Component } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  // @ViewChild('inputName', { static: true }) nameInputRef: ElementRef;
  // @ViewChild('inputAmount', { static: true }) amountInputRef: ElementRef;

  // @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();



  constructor(private shoppingListService: ShoppingListService) { }

  onAddItem(form: NgForm): void {
    // const ingName: string = this.nameInputRef.nativeElement.value;
    // const ingAmount: number = this.amountInputRef.nativeElement.value;
    const value: { name: string, amount: number } = form.value;
    const newIngredient: Ingredient = new Ingredient(value.name, value.amount);

    // this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);

    //! Another solution
    // this._shoppingListService.ingredient.emit(newIngredient)
  }
}
