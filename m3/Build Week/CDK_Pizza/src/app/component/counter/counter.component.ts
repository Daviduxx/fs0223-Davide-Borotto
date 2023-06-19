import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent{

  pizzaCounter:number = 0;
  awCounter:number = 0;
  customerCounter:number = 0;
  staffCounter:number = 0;

  pizzaCounterFn = setInterval(() => {
    this.pizzaCounter++;
    if(this.pizzaCounter == 100){
      clearInterval(this.pizzaCounterFn)
    }
  },100)

  awCounterFn = setInterval(() => {
    this.awCounter++;
    if(this.awCounter == 85){
      clearInterval(this.awCounterFn)
    }
  },100)
  customerCounterFn = setInterval(() => {
    this.customerCounter+= 10;
    if(this.customerCounter == 10500){
      clearInterval(this.customerCounterFn)
    }
  },10)
  staffCounterFn = setInterval(() => {
    this.staffCounter++;
    if(this.staffCounter == 900){
      clearInterval(this.staffCounterFn)
    }
  },10)


}
