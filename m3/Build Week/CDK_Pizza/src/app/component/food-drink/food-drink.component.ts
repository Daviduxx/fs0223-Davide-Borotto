import { IPasta } from './../../interfaces/ipasta';
import { Component, OnInit } from '@angular/core';
import { BurgerService } from 'src/app/burger.service';
import { DrinksService } from 'src/app/drinks.service';
import { IPizza } from 'src/app/interfaces/i-pizza';
import { IBurgers } from 'src/app/interfaces/iburgers';
import { IDrinks } from 'src/app/interfaces/idrinks';
import { PastaService } from 'src/app/pasta.service';
import { PizzeService } from 'src/app/pizze.service';

@Component({
  selector: 'app-food-drink',
  templateUrl: './food-drink.component.html',
  styleUrls: ['./food-drink.component.scss']
})
export class FoodDrinkComponent implements OnInit {

  pizze:IPizza[] = []
  drinks:IDrinks[] = []
  burgers:IBurgers[] = []
  pasta:IPasta[]=[]

  showPizze:boolean = true
  showDrinks:boolean = false
  showBurgers:boolean = false
  showPasta:boolean = false

  constructor (
    private PizzaSVC:PizzeService,
    private DrinkSvc:DrinksService,
    private BurgerSvc:BurgerService,
    private PastaSvc:PastaService
    ){}

  ngOnInit(){
    this.PizzaSVC.getPizze().subscribe(p => {
      console.log(p);
      this.pizze = p
    })

    this.DrinkSvc.getDrinks().subscribe(d =>{
      console.log(d);
      this.drinks = d;
    })

    this.BurgerSvc.getBurgers().subscribe(b =>{
      console.log(b);
      this.burgers = b;
    })

    this.PastaSvc.getPasta().subscribe(s =>{
      console.log(s);
      this.pasta = s;
    })
  }

  counter(i:number){

    if(i==1){

      this.showPizze = true
      this.showDrinks = false
      this.showBurgers = false
      this.showPasta = false

    } else if(i==2){

      this.showPizze = false
      this.showDrinks = true
      this.showBurgers = false
      this.showPasta = false

    } else if (i==3){

      this.showPizze = false
      this.showDrinks = false
      this.showBurgers = true
      this.showPasta = false

    } else if (i==4){

      this.showPizze = false
      this.showDrinks = false
      this.showBurgers = false
      this.showPasta = true

    }

  }

}
