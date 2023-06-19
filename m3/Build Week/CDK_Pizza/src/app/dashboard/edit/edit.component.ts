import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashService } from '../dash.service';
import { IPizza } from 'src/app/interfaces/i-pizza';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{

  constructor(
    private dashSVC:DashService,
    private router:Router,
    private route:ActivatedRoute
    ){}

  @ViewChild('f') form!:NgForm

  pizza:Partial<IPizza> = {

    title:'',
    ingredients:'',
    price:0,
    image:''
  }

  ngOnInit(){

    this.route.params
    .subscribe((params:any)=>{

      this.dashSVC.getById(params.id).subscribe((p)=>{
          this.pizza = p
          this.form.form.patchValue(this.pizza)
          console.log(this.pizza);

        })
      })
    }

    modifica(){
      this.dashSVC.putPizza(this.pizza).subscribe((p) => {
        console.log(this.form.value);
        console.log(p);
        console.log(this.pizza);
        this.router.navigate(['dashboard'])
    })
  }

}
