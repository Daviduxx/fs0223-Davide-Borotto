import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashService } from '../../dash.service';
import { IPasta } from 'src/app/interfaces/ipasta';

@Component({
  selector: 'app-pasta-edit',
  templateUrl: './pasta-edit.component.html',
  styleUrls: ['./pasta-edit.component.scss']
})
export class PastaEditComponent {

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private dashSvc: DashService
  ){}

    @ViewChild('f') form!:NgForm

    pasta:Partial<IPasta>={
      name:'',
      image:'',
      ingredients:'',
      price:0
    }

    ngOnInit(){
      this.route.params.subscribe((params:any)=>{
        this.dashSvc.getPastaId(params.id).subscribe((s)=>{
          this.pasta = s
          this.form.form.patchValue(this.pasta)
          console.log(this.pasta)
        })
      })
    }

    modifica(){
      this.dashSvc.editPasta(this.pasta).subscribe((s)=>{
        console.log(this.form.value)
        console.log(s)
        console.log(this.pasta)
        this.router.navigate(['/dashboard'])
      })
    }

}
