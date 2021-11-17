import { Component, OnInit } from '@angular/core';
import { HttpService } from "src/app/core/services/http/http.service";
import { LocalStorageService } from "src/app/core/services/local-storage/local-storage.service";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit{
  recipes?:any;
  content:any;
  formValues?:{};
  successMsg:boolean = false;
  errorMsg:boolean = false;
  recipeData:any;
  constructor(
    private localStorage:LocalStorageService,
    private httpService:HttpService,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(addRecipe:any){
    this.formValues = addRecipe.value;
    this.content = encodeURI(addRecipe.value.recipeContent);
    this.httpService.getData(this.content)
    .subscribe(
      res => {
        console.log(res);

        if(res.calories == 0) {
          console.log(res.calories);
          console.warn('Please Enter Valid Ingredients');
          this.errorMsg = true;
          this.content = undefined;
          return;
        }
        else
        {
          this.recipeData = res ;
          this.content = '';
          if(this.errorMsg) {
            this.successMsg = true;
            this.errorMsg = false;

          }
          // console.info(' Calories ', res.calories);
          // console.info(' Fat ', res.totalNutrients.FAT);
          // console.info(' Cholesterol ', res.totalNutrients.CHOLE);
          // console.info(' Sodium ', res.totalNutrients.NA);
          // console.info(' Protien ', res.totalNutrients.PROCNT);
          // console.info(' Vitamins ', res.totalNutrients.TOCPHA);
          // console.info(' Calcium ', res.totalNutrients.CA);
          // console.info(' Iron ', res.totalNutrients.FE);
          // console.info(' Potassium ', res.totalNutrients.K);
          // console.info(' Carb ', res.totalNutrients.CHOCDF);

        }
      },
    err => {
      console.log('err ',err.msg);
      addRecipe.reset();
      if(this.successMsg) {
        this.successMsg = false;
        this.errorMsg = true;
      }
      console.log(this.successMsg);
    },
    ()=>{
      addRecipe.reset();
      console.log(this.formValues);

    }
    )


  }
  closeAlert(){
    this.successMsg = false;
    this.errorMsg = false;
  }
}
