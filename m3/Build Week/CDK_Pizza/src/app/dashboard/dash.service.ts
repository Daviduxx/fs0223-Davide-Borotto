import { IPizza } from 'src/app/interfaces/i-pizza';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IDrinks } from '../interfaces/idrinks';
import { IBurgers } from '../interfaces/iburgers';
import { IPasta } from '../interfaces/ipasta';


@Injectable({
  providedIn: 'root'
})
export class DashService {

  PIZZE_API = environment.PIZZE_API


  constructor(  private http:HttpClient ) { }

  getPizze(){
    return this.http.get<IPizza[]>(this.PIZZE_API)
  }

  getById(id:number){
    return this.http.get<IPizza>(`${this.PIZZE_API}/${id}`);
  }

  writePizza(nuovaPizza:IPizza){
    return this.http.post<IPizza>(this.PIZZE_API, nuovaPizza)
  }

  putPizza(pizzaMOdificata:Partial<IPizza>){
    return this.http.put<IPizza>(`${this.PIZZE_API}/${pizzaMOdificata.id}`,pizzaMOdificata)
  }

  deletePizza(id:number){
    return this.http.delete<IPizza>(`${this.PIZZE_API}/${id}`)
  }


  DRINKS_API = environment.DRINKS_API

  getDrinks(){
    return this.http.get<IDrinks[]>(this.DRINKS_API);
  }

  getDrinkId(id:number){
    return this.http.get<IDrinks>(`${this.DRINKS_API}/${id}`)
  }

  newDrink(nuovoDrink:Partial<IDrinks>){
    return this.http.post<IDrinks>(this.DRINKS_API, nuovoDrink)
  }

  editDrink(modificaDrink:Partial<IDrinks>){
    return this.http.put<IDrinks>(`${this.DRINKS_API}/${modificaDrink.id}`, modificaDrink)
  }

  eliminaDrink(id:number){
    return this.http.delete<IDrinks>(`${this.DRINKS_API}/${id}`)
  }

  BURGERS_API = environment.BURGERS_API

  getBurgers(){
    return this.http.get<IBurgers[]>(this.BURGERS_API)
  }

  getBurgerId(id:number){
    return this.http.get<IBurgers>(`${this.BURGERS_API}/${id}`)
  }

  newBurger(nuovoBurger:Partial<IBurgers>){
    return this.http.post<IBurgers>(this.BURGERS_API, nuovoBurger)
  }

  editBurger(modificaBurger:Partial<IBurgers>){
    return this.http.put<IBurgers>(`${this.BURGERS_API}/${modificaBurger.id}`, modificaBurger)
  }

  eliminaBurger(id:number){
    return this.http.delete<IBurgers>(`${this.BURGERS_API}/${id}`)
  }

  PASTA_API = environment.PASTA_API

  getPasta(){
    return this.http.get<IPasta[]>(this.PASTA_API)
  }

  getPastaId(id:number){
    return this.http.get<IPasta>(`${this.PASTA_API}/${id}`)
  }

  newPasta(nuovaPasta:Partial<IPasta>){
    return this.http.post<IPasta>(this.PASTA_API, nuovaPasta)
  }

  editPasta(modificaPasta:Partial<IPasta>){
    return this.http.put<IPasta>(`${this.PASTA_API}/${modificaPasta.id}`, modificaPasta)
  }

  eliminaPasta(id:number){
    return this.http.delete<IPasta>(`${this.PASTA_API}/${id}`)
  }
}
