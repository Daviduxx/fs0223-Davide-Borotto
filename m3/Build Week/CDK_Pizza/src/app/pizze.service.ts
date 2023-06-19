import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment.development';
import { Injectable } from '@angular/core';
import { IPizza } from './interfaces/i-pizza';
import { UserBerlusconi } from './interfaces/user-berlusconi';
import { IPasta } from './interfaces/ipasta';
import { IBurgers } from './interfaces/iburgers';
import { IDrinks } from './interfaces/idrinks';

@Injectable({
  providedIn: 'root'
})
export class PizzeService {

  PIZZE_API = environment.PIZZE_API
  CHEF_API = environment.CHEF_API
  PIZZE_DISP = environment.PIZZE_DISP
  PIZZE_NONDISP = environment.PIZZE_NONDISP
  CART_API = environment.CART_API
  PASTA_API = environment.PASTA_API
  PASTA_DISP = environment.PASTA_DISP
  PASTA_NONDISP = environment.PASTA_NONDISP
  BURGER_API = environment.BURGERS_API
  BURGER_DISP = environment.BURGERS_DISP
  BURGER_NONDISP = environment.BURGERS_NONDISP
  DRINK_API = environment.DRINKS_API
  DRINK_DISP = environment.DRINK_DISP
  DRINK_NONDISP = environment.DRINK_NONDISP

  constructor(  private http:HttpClient ) { }

  getPizze(){
    return this.http.get<IPizza[]>(this.PIZZE_API)
  }

  getPasta(){
    return this.http.get<IPasta[]>(this.PASTA_API)
  }

  getBurger(){
    return this.http.get<IBurgers[]>(this.BURGER_API)
  }

  getDrink(){
    return this.http.get<IDrinks[]>(this.DRINK_API)
  }

  getPizzeDisp(){
    return this.http.get<IPizza[]>(this.PIZZE_DISP)
  }

  getPizzeNonDisp(){
    return this.http.get<IPizza[]>(this.PIZZE_NONDISP)
  }

  getChef(){
    return this.http.get<UserBerlusconi[]>(this.CHEF_API)
  }

  getPastaDisp(){
    return this.http.get<IPasta[]>(this.PASTA_DISP)
  }

  getPastaNonDisp(){
    return this.http.get<IPasta[]>(this.PASTA_NONDISP)
  }

  getBurgersDisp(){
    return this.http.get<IBurgers[]>(this.BURGER_DISP)
  }

  getBurgersNonDisp(){
    return this.http.get<IBurgers[]>(this.BURGER_NONDISP)
  }

  getDrinkDisp(){
    return this.http.get<IDrinks[]>(this.DRINK_DISP)
  }

  getDrinkNonDisp(){
    return this.http.get<IDrinks[]>(this.DRINK_NONDISP)
  }

  addToCart(item:IPizza){
    return this.http.post<IPizza[]>(this.CART_API, item)
  }

  addToCartPasta(item:IPasta){
    return this.http.post<IPasta[]>(this.CART_API, item)
  }

  addToCartBurger(item:IBurgers){
    return this.http.post<IBurgers[]>(this.CART_API, item)
  }
}
