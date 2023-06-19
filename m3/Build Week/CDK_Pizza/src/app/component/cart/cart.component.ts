import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ICart } from 'src/app/interfaces/i-cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  constructor ( private cartSVC:CartService) {}

  cart:ICart[] = []
  total:number = 0;

  ngOnInit(){
    this.cartSVC.getCart().subscribe(i => {
      console.log(i);
      this.cart = i
      this.cart.forEach((t) => {
        this.total += t.price
      })
    })

  }
  deleteItem(item:ICart, i:number){
    this.cart.splice(i,1)
    this.total = 0;
    this.cartSVC.deleteCart(item).subscribe(i => {
      console.log(i);

    }

    )
    this.cart.forEach((t) => {
      this.total += t.price
    })
  }
}
