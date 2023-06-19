import { Injectable } from '@angular/core';
import { IBurgers } from './interfaces/iburgers';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  BURGERS_API = environment.BURGERS_API

  constructor(private http:HttpClient) { }

  getBurgers(){
    return this.http.get<IBurgers[]>(this.BURGERS_API)
  }
}
