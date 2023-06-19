import { Component, ViewChild, OnInit } from '@angular/core';
import { LoginDataBerlusconi } from 'src/app/interfaces/login-data-berlusconi';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {

  password!: string;
  loginForm!: FormGroup;

  @ViewChild('f') form!:NgForm

  isMenuCollapsed = true;
  isAdmin = false;
  userExist = false;


  constructor(
    private authSvc: AuthService,
    private formBuilder:FormBuilder,
    private router:Router
    ) {
    let checkUser = localStorage.getItem('user');

    if (checkUser != null) {
      this.userExist = !this.userExist;
    }
  }



  data: LoginDataBerlusconi = {
    email: '',
    password: ''
  }

  login(){
    this.authSvc.login(this.data)
    .subscribe(accessData => {

      if(accessData.user.admin){
        this.isAdmin = true;
      }
      this.router.navigate(['/dashboard'])
    })}
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      password:['', [Validators.required]]
    })
  }

}
