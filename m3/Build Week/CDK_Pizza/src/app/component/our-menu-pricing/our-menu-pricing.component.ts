import { IPizza } from './../../interfaces/i-pizza';
import { Component, OnInit } from '@angular/core';
import { IBurgers } from 'src/app/interfaces/iburgers';
import { IDrinks } from 'src/app/interfaces/idrinks';
import { IPasta } from 'src/app/interfaces/ipasta';
import { PizzeService } from 'src/app/pizze.service';

@Component({
  selector: 'app-our-menu-pricing',
  templateUrl: './our-menu-pricing.component.html',
  styleUrls: ['./our-menu-pricing.component.scss']
})
export class OurMenuPricingComponent implements OnInit{

  pizze:IPizza[] = []
  pasta:IPasta[] = []
  burgers:IBurgers[] = []
  drinks:IDrinks[] = []

  constructor ( private PizzaSVC:PizzeService ){}

  ngOnInit(){
    this.PizzaSVC.getPizze().subscribe(p => {
      console.log(p);
      this.pizze = p
    });
    this.PizzaSVC.getPasta().subscribe(p => {
      console.log(p);
      this.pasta = p
    })
    this.PizzaSVC.getBurger().subscribe(p => {
      console.log(p);
      this.burgers = p
    })
    this.PizzaSVC.getDrink().subscribe(p => {
      console.log(p);
      this.drinks = p
    })
  }

  ascendente(){
    this.pizze.sort((a:IPizza, b:IPizza)=>{
      return b.price - a.price
    })
    console.log(this.pizze);
  }

  discendente(){
    this.pizze.sort((a:IPizza, b:IPizza)=>{
      return a.price - b.price
    })
    console.log(this.pizze);
  }

  disponibili(){
    this.PizzaSVC.getPizzeDisp().subscribe(p => {
      console.log(p);
      this.pizze = p
    })
  }

  nonDisponibili(){
    this.PizzaSVC.getPizzeNonDisp().subscribe(p => {
      console.log(p);
      this.pizze = p
    })
  }

  ascendentePasta(){
    this.pasta.sort((a:IPasta, b:IPasta)=>{
      return b.price - a.price
    })
    console.log(this.pizze);
  }

  discendentePasta(){
    this.pasta.sort((a:IPasta, b:IPasta)=>{
      return a.price - b.price
    })
    console.log(this.pizze);
  }

  disponibiliPasta(){
    this.PizzaSVC.getPastaDisp().subscribe(p => {
      console.log(p);
      this.pasta = p
    })
  }

  nonDisponibiliPasta(){
    this.PizzaSVC.getPastaNonDisp().subscribe(p => {
      console.log(p);
      this.pasta = p
    })
  }


  ascendenteBurger(){
    this.burgers.sort((a:IBurgers, b:IBurgers)=>{
      return b.price - a.price
    })
    console.log(this.burgers);
  }

  discendenteBurger(){
    this.burgers.sort((a:IBurgers, b:IBurgers)=>{
      return a.price - b.price
    })
    console.log(this.burgers);
  }

  disponibiliBurger(){
    this.PizzaSVC.getBurgersDisp().subscribe(p => {
      console.log(p);
      this.burgers = p
    })
  }

  nonDisponibiliBurger(){
    this.PizzaSVC.getBurgersNonDisp().subscribe(p => {
      console.log(p);
      this.burgers = p
    })
  }

  ascendenteDrink(){
    this.drinks.sort((a:IDrinks, b:IDrinks)=>{
      return b.price - a.price
    })
    console.log(this.drinks);
  }

  discendenteDrink(){
    this.drinks.sort((a:IDrinks, b:IDrinks)=>{
      return a.price - b.price
    })
    console.log(this.drinks);
  }

  disponibiliDrink(){
    this.PizzaSVC.getDrinkDisp().subscribe(p => {
      console.log(p);
      this.drinks = p
    })
  }

  nonDisponibiliDrink(){
    this.PizzaSVC.getDrinkNonDisp().subscribe(p => {
      console.log(p);
      this.drinks = p
    })
  }

  addToCart(item:IPizza){
    this.PizzaSVC.addToCart(item).subscribe(i => {
      console.log(i);
    })
  }

  addToCartPasta(item:IPasta){
    this.PizzaSVC.addToCartPasta(item).subscribe(i => {
      console.log(i);
    })
  }

}
