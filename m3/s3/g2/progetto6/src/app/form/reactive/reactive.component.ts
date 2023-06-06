import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit{

  form!:FormGroup;
  powers:string[] = ['imparare typescript', 'imparare angular', 'imparare react', 'imparare java']

  constructor(private fb:FormBuilder){}

  ngOnInit(){

    this.form = this.fb.group({
      nome: this.fb.control(null, Validators.required),
      alterEgo: this.fb.control(null, Validators.required),
      power: this.fb.control(null),
      enemy: this.fb.control(null, Validators.maxLength(10)),
      planet: this.fb.control(null, [Validators.required, Validators.minLength(5)]),
      weakness: this.fb.control(null, Validators.required)
    })
  }

  onSubmit(){
    console.log(this.form);

  }

}
