import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NutritionDataTableComponent } from './components/nutrition-data-table/nutrition-data-table.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    NutritionDataTableComponent,
    AddRecipeComponent
  ],
  exports:[
    HeaderComponent,
    NutritionDataTableComponent,
    AddRecipeComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class FeaturesModule { }
