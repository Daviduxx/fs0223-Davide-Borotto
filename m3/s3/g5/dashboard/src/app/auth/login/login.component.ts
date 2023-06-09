import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;

  constructor( private fb:FormBuilder, private AuthSVC:AuthService, private router: Router){}

  ngOnInit(){

    this.loginForm = this.fb.group({

        nome: this.fb.control(null,[Validators.required]),
        cognome: this.fb.control(null,[Validators.required]),
        email: this.fb.control(null,[Validators.required]),
        password: this.fb.control(null,[Validators.required])

    })
  }

  login(){
    this.AuthSVC.login(this.loginForm.value).subscribe(u => {
      console.log(u);
      this.loginForm.reset();
      this.router.navigate(['auth/dashboard'])
    })
  }

}
