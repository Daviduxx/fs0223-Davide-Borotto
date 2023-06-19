import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ICart } from './interfaces/i-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http:HttpClient) { }

  CART_API = environment.CART_API

  getCart(){
    return this.http.get<ICart[]>(this.CART_API)
  }

  deleteCart(item:ICart){
    return this.http.delete<ICart[]>(`${this.CART_API}/${item.id}`)
  }
}
