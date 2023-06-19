import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DashService } from './dash.service';
import { IPizza } from '../interfaces/i-pizza';
import { IDrinks } from '../interfaces/idrinks';
import { IBurgers } from '../interfaces/iburgers';
import { IPasta } from '../interfaces/ipasta';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  pizze:IPizza[] = []
  drinks:IDrinks[] = []
  burgers:IBurgers[] = []
  pasta:IPasta[] = []

  constructor (
    private dashSVC:DashService,
    private authSVC:AuthService,
    private router:Router
    ) {}

  @ViewChild('f') form!:NgForm




  newDrink : Partial<IDrinks> = {
    name : '',
    image : '',
    price: 0,
    disponibile: true
  }


  newBurger:Partial<IBurgers> = {
    name : '',
    image:'',
    ingredients:'',
    price: 0,
    disponibile: true
  }

  newPasta:Partial<IPasta> = {
    name:'',
    image:'',
    ingredients:'',
    price:0,
    disponibile: true
  }



  creaPizza(){
    console.log(this.form);
    console.log(this.form.value);
    this.dashSVC.writePizza(this.form.value).subscribe((p) => {
      console.log(p);
      this.pizze.push(p)
      console.log(this.pizze);

    })
    this.form.reset()
  }

  creaDrink(){
    console.log(this.form)
    console.log(this.form.value)
    this.dashSVC.newDrink(this.newDrink).subscribe((d)=>{
      console.log(d);
      this.drinks.push(d)
      console.log(this.drinks)
    })
    this.form.reset()
  }

  creaBurger(){
    console.log(this.form)
    console.log(this.form.value)
    this.dashSVC.newBurger(this.newBurger).subscribe((b)=>{
      console.log(b)
      this.burgers.push(b)
      console.log(this.burgers)
    })
    this.form.reset()
  }

  creaPasta(){
    console.log(this.form)
    console.log(this.form.value)
    this.dashSVC.newPasta(this.newPasta).subscribe((s)=>{
      console.log(s)
      this.pasta.push(s)
      console.log(this.pasta)
    })
    this.form.reset
  }


  ngOnInit(){
    this.dashSVC.getPizze().subscribe(p => {
      console.log(p);
      this.pizze = p
    })

    this.dashSVC.getDrinks().subscribe(drink => {
      console.log(drink)
      this.drinks = drink
    });

    this.dashSVC.getBurgers().subscribe(burger=>{
      console.log(burger)
      this.burgers = burger
    })
    this.dashSVC.getPasta().subscribe(pasta =>{
      console.log(pasta)
      this.pasta = pasta
    })
  }

  delete(id:number){
    this.dashSVC.deletePizza(id).subscribe((p)=>{
      console.log(p);
      let index = this.pizze.findIndex(p => p.id == id)
      this.pizze.splice(index,1)
    })
  }

  deleteDrink(id:number){
    this.dashSVC.eliminaDrink(id).subscribe((d)=>{
      console.log(d)
      let index = this.drinks.findIndex(d => d.id == id)
      this.drinks.splice(index, 1)
    })
  }

  deleteBurger(id:number){
    this.dashSVC.eliminaBurger(id).subscribe((b)=>{
      console.log(b)
      let index = this.burgers.findIndex(b => b.id == id)
      this.burgers.splice(index, 1)
    })
  }

  deletePasta(id:number){
    this.dashSVC.eliminaPasta(id).subscribe((s)=>{
      console.log(s)
      let index = this.pasta.findIndex(s => s.id == id)
      this.pasta.splice(index, 1)
    })
  }

  logout(){
    this.authSVC.logout();
    this.router.navigate(['home'])
  }

}
