import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe; // recipe is a property of type Recipe
  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected(){
    this._recipeService.recipeSelected.emit(this.recipe)
  }
}
