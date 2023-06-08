import { Component } from '@angular/core';
import { ISignup } from '../interfaces/i-signup';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor( private AuthSVC:AuthService){}

  userData:ISignup = {
    email: '',
    password: ''
  }

  register(){
    this.AuthSVC.signup(this.userData).subscribe(reg => console.log(reg.user))

  }
}
