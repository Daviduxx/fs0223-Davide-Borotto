import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDrinks } from './interfaces/idrinks';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  DRINKS_API = environment.DRINKS_API

  constructor(private http:HttpClient) { }

  getDrinks(){
    return this.http.get<IDrinks[]>(this.DRINKS_API)
  }

}
