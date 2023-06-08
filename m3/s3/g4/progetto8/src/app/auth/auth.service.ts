import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IUser } from './interfaces/i-user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ISignup } from './interfaces/i-signup';
import { IAuthData } from './interfaces/i-auth-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()
  APIURL = environment.APIURL;

  private authSubject = new BehaviorSubject<null | IUser>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(u => Boolean(u)))

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  signup(datiUser:ISignup){
    return this.http.post<IAuthData>(this.APIURL + '/signup', datiUser)
  }
}
