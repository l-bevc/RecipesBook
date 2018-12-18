import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgsNctp8cGIJ_af-q-MGKafKe8VYU2r8l31SjVrg2NrsFErmI')
  ];
  constructor() { }

  ngOnInit() {
  }

}
