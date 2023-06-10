import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IUser } from './interfaces/i-user';
import { HttpClient } from '@angular/common/http';
import { ISignup } from './interfaces/i-signup';
import { IAuthData } from './interfaces/i-auth-data';
import { Form, FormGroup } from '@angular/forms';
import { IPost } from './interfaces/i-post';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()
  APIURL:string = environment.APIURL;
  POSTAPI:string = environment.POSTAPI;
  cUser:string = ''

   authSubject = new BehaviorSubject<null | IAuthData>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(u => Boolean(u)))
  authLogoutTimer:any;
  router: any;
  constructor( private http:HttpClient, private Router:Router) { }

  signup(datiUser:FormGroup){
    return this.http.post<IUser>(this.APIURL + '/signup', datiUser)
    .pipe(catchError(this.getErrors))
  }

  login(data:FormGroup){
    return this.http.post<IAuthData>(this.APIURL + '/login', data)
    .pipe(tap(data =>{
      this.authSubject.next(data);
      localStorage.setItem('user', JSON.stringify(data))

      const expDate = this.jwtHelper
      .getTokenExpirationDate(data.accessToken) as Date;
      this.autoLogout(expDate)
    }),
    catchError(this.getErrors)
    )
  }

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.Router.navigate(['/auth']);
    if(this.authLogoutTimer){
      clearTimeout(this.authLogoutTimer);
    }
  }

  autoLogout(expDate:Date){
    const expMs = expDate.getTime() - new Date().getTime();
    this.authLogoutTimer = setTimeout(()=>{
      this.logout();
    }, expMs)
  }

  resUser(){
    const userJson = localStorage.getItem('user');
    if(!userJson){
      return
    }
    const user:IAuthData = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(user.accessToken)){
      return;
    }
    this.authSubject.next(user);
    console.log('utente loggato');
    this.cUser = user.user.nome

  }

  getErrors(er:any){
    console.log(er);
    alert(er.error)
    return throwError(er.error)

  }
}
