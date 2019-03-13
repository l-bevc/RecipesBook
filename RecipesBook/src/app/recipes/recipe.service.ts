import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is a test',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgsNctp8cGIJ_af-q-MGKafKe8VYU2r8l31SjVrg2NrsFErmI',
        [
            new Ingredient('Meat', 1),
            new Ingredient ('French Fries', 20)
        ]),
        new Recipe('Another test recipe', 'This is a test',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgsNctp8cGIJ_af-q-MGKafKe8VYU2r8l31SjVrg2NrsFErmI',
        [
            new Ingredient('Buns', 1),
            new Ingredient('Meat', 1)
        ])
      ];

      constructor(private shoppingListService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}
