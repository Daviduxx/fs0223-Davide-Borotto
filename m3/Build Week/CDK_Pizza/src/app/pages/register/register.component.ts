import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDataBerlusconi } from 'src/app/interfaces/register-data-berlusconi';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private authSvc: AuthService, private router:Router
  ){}



  data:RegisterDataBerlusconi = {
    email: '',
    password: '',
    name: '',
    surname: '',
    admin: true,
    image:"../../../assets/chef.png"
  };

  register(){
    this.authSvc.signUp(this.data)
    .subscribe(accessData => {
      this.router.navigate(['dashboard'])
      // alert(accessData.user.name)
    })
  }
}
