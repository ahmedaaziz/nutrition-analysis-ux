import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nutrition-data-table',
  templateUrl: './nutrition-data-table.component.html',
  styleUrls: ['./nutrition-data-table.component.scss']
})
export class NutritionDataTableComponent implements OnInit {
  @Input() recipeInfo:any;
  @Output() clearMsg =  new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  clearData(){
    this.recipeInfo = '';
  }

}
