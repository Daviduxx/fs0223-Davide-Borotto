import { ISignup } from './../interfaces/i-signup';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  form!:FormGroup;

  constructor( private fb:FormBuilder, private AuthSVC:AuthService){}

    userData:ISignup = {
      nome: '',
      cognome: '',
      email: '',
      password: ''
    }


  ngOnInit(){

    this.form = this.fb.group({

        nome: this.fb.control(null,[Validators.required]),
        cognome: this.fb.control(null,[Validators.required]),
        email: this.fb.control(null,[Validators.required]),
        password: this.fb.control(null,[Validators.required])

    })
  }

  register(){
    this.AuthSVC.signup(this.form.value).subscribe(reg => {
      console.log(reg);
      this.form.reset();
    }
    )
  }
}
