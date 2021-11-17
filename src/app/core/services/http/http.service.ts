import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment as env } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string = `${env.apiRoot}app_id=${env.app_id}&app_key=${env.app_key}&nutrition-type=${env.nutrition_type}&ingr=`;
  result:string = '';
  constructor(private http:HttpClient) { }


  getData(data:any):Observable<any> {
    this.result = data;
    console.log(this.url)
    console.log('data after Submitting ',data);
    console.log('url after Submitting ',this.url);
    return this.http.get(this.url+this.result,data);
    data = '';
  }

}
