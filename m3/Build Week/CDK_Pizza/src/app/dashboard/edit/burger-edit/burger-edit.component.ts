import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashService } from '../../dash.service';
import { IBurgers } from 'src/app/interfaces/iburgers';

@Component({
  selector: 'app-burger-edit',
  templateUrl: './burger-edit.component.html',
  styleUrls: ['./burger-edit.component.scss']
})
export class BurgerEditComponent {

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private dashSvc: DashService
    ){}

    @ViewChild('f') form!:NgForm

    burger:Partial<IBurgers>={
      name:'',
      image:'',
      ingredients:'',
      price:0
    }

    ngOnInit(){
      this.route.params.subscribe((params:any)=>{
        this.dashSvc.getBurgerId(params.id).subscribe((b)=>{
          this.burger = b
          this.form.form.patchValue(this.burger)
          console.log(this.burger)
        })
      })
    }

    modifica(){
      this.dashSvc.editBurger(this.burger).subscribe((b)=>{
        console.log(this.form.value)
        console.log(b)
        console.log(this.burger)
        this.router.navigate(['/dashboard'])
      })
    }

}
