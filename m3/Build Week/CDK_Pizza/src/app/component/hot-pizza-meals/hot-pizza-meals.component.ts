import { Component, OnInit } from '@angular/core';
import { IPizza } from 'src/app/interfaces/i-pizza';
import { PizzeService } from 'src/app/pizze.service';

@Component({
  selector: 'app-hot-pizza-meals',
  templateUrl: './hot-pizza-meals.component.html',
  styleUrls: ['./hot-pizza-meals.component.scss']
})
export class HotPizzaMealsComponent implements OnInit{

  pizze:IPizza[] = []

  constructor ( private PizzaSVC:PizzeService ){}

  ngOnInit(){
    this.PizzaSVC.getPizze().subscribe(p => {
      console.log(p);
      this.pizze = p
    })
  }
}
