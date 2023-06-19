import { IDrinks } from './../../../interfaces/idrinks';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashService } from '../../dash.service';



@Component({
  selector: 'app-drinks-edit',
  templateUrl: './drinks-edit.component.html',
  styleUrls: ['./drinks-edit.component.scss']
})
export class DrinksEditComponent implements OnInit {

  constructor(
    private dashSVC:DashService,
    private router:Router,
    private route:ActivatedRoute
    ){}

    @ViewChild('f') form!:NgForm

    drink:Partial<IDrinks> = {
      name : '',
      image : '',
      price: 0
    }

  ngOnInit(){
    this.route.params.subscribe((params:any)=>{
      this.dashSVC.getDrinkId(params.id).subscribe((d)=>{
        this.drink = d
        this.form.form.patchValue(this.drink)
        console.log(this.drink)
      })
    })
  }

  modifica(){
    this.dashSVC.editDrink(this.drink).subscribe((d)=>{
      console.log(this.form.value)
      console.log(d)
      console.log(this.drink)
      this.router.navigate(['/dashboard'])
    })
  }

}
