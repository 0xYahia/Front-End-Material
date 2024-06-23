import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('inputName', { static: true }) nameInputRef: ElementRef;
  // @ViewChild('inputAmount', { static: true }) amountInputRef: ElementRef;

  // @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  subscription: Subscription;
  editMode: boolean = false;
  editItemIndex: number;
  editableItem: Ingredient;
  @ViewChild('f', { static: false }) form: NgForm;



  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit(): void {
    this.subscription = this.shoppingListService.startEditing$.subscribe((index: number) => {
      this.editItemIndex = index;
      this.editMode = true;

      this.editableItem = this.shoppingListService.getIngredient(index);
      this.form.setValue({
        name: this.editableItem.name,
        amount: this.editableItem.amount
      });
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm): void {
    // const ingName: string = this.nameInputRef.nativeElement.value;
    // const ingAmount: number = this.amountInputRef.nativeElement.value;
    const value: { name: string, amount: number } = form.value;
    const newIngredient: Ingredient = new Ingredient(value.name, value.amount);

    // this.ingredientAdded.emit(newIngredient);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();

    //! Another solution
    // this._shoppingListService.ingredient.emit(newIngredient)
  }

  onClear(): void {
    this.form.reset();
    this.editMode = false;
  }

  onDelete(): void {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
}
